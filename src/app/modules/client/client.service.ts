import User from "../general/user.model";

const getCountryIso3 = require("country-iso-2-to-3");

export const getGeographyFromDB = async () => {
    const users = await User.find();

    const mappedLocations = users.reduce((acc: any, { country }) => {
        const countryISO3: any = getCountryIso3(country);
        if (!acc[countryISO3]) {
            acc[countryISO3] = 0;
        }
        acc[countryISO3]++;
        return acc;
    }, {});

    // {BAN: 2, IND: 3}

    const formattedLocations = Object.entries(mappedLocations).map(
        ([country, count]) => {
            return { id: country, value: count };
        }
    );
    // [[BAN, 2], [IND, 3]]

    // [{id: "BAN", value: 2}, {id: IND, value: 3}]

    return formattedLocations;
};
