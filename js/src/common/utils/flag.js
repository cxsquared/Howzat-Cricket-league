const flagUrl = 'https://cdn.staticaly.com/gh/hjnilsson/country-flags/master/svg/';

export default function flag(countryCode) {
    return <img src={`${flagUrl}${countryCode}.svg`} alt={countryCode} />;
}
