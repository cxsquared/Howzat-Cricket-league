<?php

namespace Cxsquared\HowzatCricketLeague\Listener;

use Carbon\Carbon;
use Cxsquared\HowzatCricketLeague\Player\Event\Created;
use Cxsquared\HowzatCricketLeague\Player\Event\Retired;
use Cxsquared\HowzatCricketLeague\SettingsUtils;
use Cxsquared\HowzatCricketLeague\Update\Update;
use Flarum\Discussion\Command\StartDiscussion;
use Flarum\Group\Group;
use Flarum\Http\UrlGenerator;
use Flarum\Locale\Translator;
use Flarum\Settings\SettingsRepositoryInterface;
use Flarum\User\UserRepository;
use Illuminate\Contracts\Bus\Dispatcher as BusDispatcher;
use Illuminate\Events\Dispatcher;
use Illuminate\Support\Facades\DB;

class PlayerEvents
{
    protected $bus;

    protected $users;

    protected $settings;

    protected $translator;

    protected $url;

    public function __construct(
        BusDispatcher $bus,
        UserRepository $users,
        SettingsRepositoryInterface $settings,
        UrlGenerator $url
    ) {
        $this->bus = $bus;
        $this->users = $users;
        $this->settings = $settings;
        $this->translator = app(Translator::class);
        $this->url = $url;
    }

    public function subscribe(Dispatcher $events)
    {
        $events->listen(Created::class, [$this, 'onPlayerCreated']);
        $events->listen(Retired::class, [$this, 'onPlayerRetired']);
    }

    public function onPlayerCreated(Created $event)
    {
        // Post recruitment Thread
        $captainGroupId = $this->settings->get('hcl.captain-group-id', 13);
        $captains = Group::findOrFail($captainGroupId)->users()->get();

        $playerName = $event->player->first_name . " " . $event->player->last_name;
        $postBody = "";
        foreach ($captains as &$captain) {
            $postBody .= "@" . $captain->username . " ";
        }
        $postBody .= "\n\n";

        $postBody .= "Username @" . $event->actor->username . "\n";
        $postBody .= "Player Name " . $playerName . "\n";
        $postBody .= "Nationality " . $this->code_to_country($event->player->nationality) . "\n";
        $postBody .= "Bowling Style " . $this->translator->trans('hcl.forum.player.style.' . $event->player->bowling_style) . "\n";
        $postBody .= "\n";
        $postBody .= "Age " . $event->player->age . "\n";
        $postBody .= "Height (cms) " . $event->player->height . "\n";
        $postBody .= "Weight (kgs) " . $event->player->weight . "\n";

        $botId = $this->settings->get('hcl.bot-id', 18);
        $bot = $this->users->findOrFail($botId);

        $playersTagId = $this->settings->get('hcl.player-tag-id', 14);

        $data = array(
            "attributes" => array(
                "title" => $playerName,
                "content" => $postBody
            ),
            "relationships" => array(
                "tags" => array(
                    "data" => array(
                        array(
                            "id" => $playersTagId,
                            "type" => "tags"
                        )
                    )
                )
            )
        );

        return $this->bus->dispatch(
            new StartDiscussion($bot, $data, '127.0.0.1')
        );
    }

    public function onPlayerRetired(Retired $event)
    {
        // Post recruitment Thread
        $playerName = $event->player->first_name . " " . $event->player->last_name;
        $playerUrl = $this->url->to('forum')->route('user', ['username' => $event->player->retired_user->username]);
        $postBody = "[" . $playerName . "](" . $playerUrl . ") has retired!";
        $title = "[S" . $event->player->season . "] " . $playerName . " has retired!";

        $botId = SettingsUtils::GetBotUserId($this->settings);
        $bot = $this->users->findOrFail($botId);

        $leagueMovementsTagId = SettingsUtils::GetLeagueMovementsTagId($this->settings);
        $retirementTagId = SettingsUtils::GetRetiredMentTagId($this->settings);

        $data = array(
            "attributes" => array(
                "title" => $title,
                "content" => $postBody
            ),
            "relationships" => array(
                "tags" => array(
                    "data" => array(
                        array(
                            "id" => $leagueMovementsTagId,
                            "type" => "tags"
                        ),
                        array(
                            "id" => $retirementTagId,
                            "type" => "tags"
                        )
                    )
                )
            )
        );

        // TODO deal with udpates

        return $this->bus->dispatch(
            new StartDiscussion($bot, $data, '127.0.0.1')
        );
    }

    //Edited by rezker (http://www.rezker.com)
    function code_to_country($code)
    {
        $code = strtoupper($code);

        $countryList = array(
            'AF' => 'Afghanistan',
            'AX' => 'Aland Islands',
            'AL' => 'Albania',
            'DZ' => 'Algeria',
            'AS' => 'American Samoa',
            'AD' => 'Andorra',
            'AO' => 'Angola',
            'AI' => 'Anguilla',
            'AQ' => 'Antarctica',
            'AG' => 'Antigua and Barbuda',
            'AR' => 'Argentina',
            'AM' => 'Armenia',
            'AW' => 'Aruba',
            'AU' => 'Australia',
            'AT' => 'Austria',
            'AZ' => 'Azerbaijan',
            'BS' => 'Bahamas the',
            'BH' => 'Bahrain',
            'BD' => 'Bangladesh',
            'BB' => 'Barbados',
            'BY' => 'Belarus',
            'BE' => 'Belgium',
            'BZ' => 'Belize',
            'BJ' => 'Benin',
            'BM' => 'Bermuda',
            'BT' => 'Bhutan',
            'BO' => 'Bolivia',
            'BA' => 'Bosnia and Herzegovina',
            'BW' => 'Botswana',
            'BV' => 'Bouvet Island (Bouvetoya)',
            'BR' => 'Brazil',
            'IO' => 'British Indian Ocean Territory (Chagos Archipelago)',
            'VG' => 'British Virgin Islands',
            'BN' => 'Brunei Darussalam',
            'BG' => 'Bulgaria',
            'BF' => 'Burkina Faso',
            'BI' => 'Burundi',
            'KH' => 'Cambodia',
            'CM' => 'Cameroon',
            'CA' => 'Canada',
            'CV' => 'Cape Verde',
            'KY' => 'Cayman Islands',
            'CF' => 'Central African Republic',
            'TD' => 'Chad',
            'CL' => 'Chile',
            'CN' => 'China',
            'CX' => 'Christmas Island',
            'CC' => 'Cocos (Keeling) Islands',
            'CO' => 'Colombia',
            'KM' => 'Comoros the',
            'CD' => 'Congo',
            'CG' => 'Congo the',
            'CK' => 'Cook Islands',
            'CR' => 'Costa Rica',
            'CI' => 'Cote d\'Ivoire',
            'HR' => 'Croatia',
            'CU' => 'Cuba',
            'CY' => 'Cyprus',
            'CZ' => 'Czech Republic',
            'DK' => 'Denmark',
            'DJ' => 'Djibouti',
            'DM' => 'Dominica',
            'DO' => 'Dominican Republic',
            'EC' => 'Ecuador',
            'EG' => 'Egypt',
            'SV' => 'El Salvador',
            'GQ' => 'Equatorial Guinea',
            'ER' => 'Eritrea',
            'EE' => 'Estonia',
            'ET' => 'Ethiopia',
            'FO' => 'Faroe Islands',
            'FK' => 'Falkland Islands (Malvinas)',
            'FJ' => 'Fiji the Fiji Islands',
            'FI' => 'Finland',
            'FR' => 'France, French Republic',
            'GF' => 'French Guiana',
            'PF' => 'French Polynesia',
            'TF' => 'French Southern Territories',
            'GA' => 'Gabon',
            'GM' => 'Gambia the',
            'GE' => 'Georgia',
            'DE' => 'Germany',
            'GH' => 'Ghana',
            'GI' => 'Gibraltar',
            'GR' => 'Greece',
            'GL' => 'Greenland',
            'GD' => 'Grenada',
            'GP' => 'Guadeloupe',
            'GU' => 'Guam',
            'GT' => 'Guatemala',
            'GG' => 'Guernsey',
            'GN' => 'Guinea',
            'GW' => 'Guinea-Bissau',
            'GY' => 'Guyana',
            'HT' => 'Haiti',
            'HM' => 'Heard Island and McDonald Islands',
            'VA' => 'Holy See (Vatican City State)',
            'HN' => 'Honduras',
            'HK' => 'Hong Kong',
            'HU' => 'Hungary',
            'IS' => 'Iceland',
            'IN' => 'India',
            'ID' => 'Indonesia',
            'IR' => 'Iran',
            'IQ' => 'Iraq',
            'IE' => 'Ireland',
            'IM' => 'Isle of Man',
            'IL' => 'Israel',
            'IT' => 'Italy',
            'JM' => 'Jamaica',
            'JP' => 'Japan',
            'JE' => 'Jersey',
            'JO' => 'Jordan',
            'KZ' => 'Kazakhstan',
            'KE' => 'Kenya',
            'KI' => 'Kiribati',
            'KP' => 'Korea',
            'KR' => 'Korea',
            'KW' => 'Kuwait',
            'KG' => 'Kyrgyz Republic',
            'LA' => 'Lao',
            'LV' => 'Latvia',
            'LB' => 'Lebanon',
            'LS' => 'Lesotho',
            'LR' => 'Liberia',
            'LY' => 'Libyan Arab Jamahiriya',
            'LI' => 'Liechtenstein',
            'LT' => 'Lithuania',
            'LU' => 'Luxembourg',
            'MO' => 'Macao',
            'MK' => 'Macedonia',
            'MG' => 'Madagascar',
            'MW' => 'Malawi',
            'MY' => 'Malaysia',
            'MV' => 'Maldives',
            'ML' => 'Mali',
            'MT' => 'Malta',
            'MH' => 'Marshall Islands',
            'MQ' => 'Martinique',
            'MR' => 'Mauritania',
            'MU' => 'Mauritius',
            'YT' => 'Mayotte',
            'MX' => 'Mexico',
            'FM' => 'Micronesia',
            'MD' => 'Moldova',
            'MC' => 'Monaco',
            'MN' => 'Mongolia',
            'ME' => 'Montenegro',
            'MS' => 'Montserrat',
            'MA' => 'Morocco',
            'MZ' => 'Mozambique',
            'MM' => 'Myanmar',
            'NA' => 'Namibia',
            'NR' => 'Nauru',
            'NP' => 'Nepal',
            'AN' => 'Netherlands Antilles',
            'NL' => 'Netherlands the',
            'NC' => 'New Caledonia',
            'NZ' => 'New Zealand',
            'NI' => 'Nicaragua',
            'NE' => 'Niger',
            'NG' => 'Nigeria',
            'NU' => 'Niue',
            'NF' => 'Norfolk Island',
            'MP' => 'Northern Mariana Islands',
            'NO' => 'Norway',
            'OM' => 'Oman',
            'PK' => 'Pakistan',
            'PW' => 'Palau',
            'PS' => 'Palestinian Territory',
            'PA' => 'Panama',
            'PG' => 'Papua New Guinea',
            'PY' => 'Paraguay',
            'PE' => 'Peru',
            'PH' => 'Philippines',
            'PN' => 'Pitcairn Islands',
            'PL' => 'Poland',
            'PT' => 'Portugal, Portuguese Republic',
            'PR' => 'Puerto Rico',
            'QA' => 'Qatar',
            'RE' => 'Reunion',
            'RO' => 'Romania',
            'RU' => 'Russian Federation',
            'RW' => 'Rwanda',
            'BL' => 'Saint Barthelemy',
            'SH' => 'Saint Helena',
            'KN' => 'Saint Kitts and Nevis',
            'LC' => 'Saint Lucia',
            'MF' => 'Saint Martin',
            'PM' => 'Saint Pierre and Miquelon',
            'VC' => 'Saint Vincent and the Grenadines',
            'WS' => 'Samoa',
            'SM' => 'San Marino',
            'ST' => 'Sao Tome and Principe',
            'SA' => 'Saudi Arabia',
            'SN' => 'Senegal',
            'RS' => 'Serbia',
            'SC' => 'Seychelles',
            'SL' => 'Sierra Leone',
            'SG' => 'Singapore',
            'SK' => 'Slovakia (Slovak Republic)',
            'SI' => 'Slovenia',
            'SB' => 'Solomon Islands',
            'SO' => 'Somalia, Somali Republic',
            'ZA' => 'South Africa',
            'GS' => 'South Georgia and the South Sandwich Islands',
            'ES' => 'Spain',
            'LK' => 'Sri Lanka',
            'SD' => 'Sudan',
            'SR' => 'Suriname',
            'SJ' => 'Svalbard & Jan Mayen Islands',
            'SZ' => 'Swaziland',
            'SE' => 'Sweden',
            'CH' => 'Switzerland, Swiss Confederation',
            'SY' => 'Syrian Arab Republic',
            'TW' => 'Taiwan',
            'TJ' => 'Tajikistan',
            'TZ' => 'Tanzania',
            'TH' => 'Thailand',
            'TL' => 'Timor-Leste',
            'TG' => 'Togo',
            'TK' => 'Tokelau',
            'TO' => 'Tonga',
            'TT' => 'Trinidad and Tobago',
            'TN' => 'Tunisia',
            'TR' => 'Turkey',
            'TM' => 'Turkmenistan',
            'TC' => 'Turks and Caicos Islands',
            'TV' => 'Tuvalu',
            'UG' => 'Uganda',
            'UA' => 'Ukraine',
            'AE' => 'United Arab Emirates',
            'GB' => 'United Kingdom',
            'US' => 'United States of America',
            'UM' => 'United States Minor Outlying Islands',
            'VI' => 'United States Virgin Islands',
            'UY' => 'Uruguay, Eastern Republic of',
            'UZ' => 'Uzbekistan',
            'VU' => 'Vanuatu',
            'VE' => 'Venezuela',
            'VN' => 'Vietnam',
            'WF' => 'Wallis and Futuna',
            'EH' => 'Western Sahara',
            'YE' => 'Yemen',
            'ZM' => 'Zambia',
            'ZW' => 'Zimbabwe'
        );

        if (!$countryList[$code]) return $code;
        else return $countryList[$code];
    }
}
