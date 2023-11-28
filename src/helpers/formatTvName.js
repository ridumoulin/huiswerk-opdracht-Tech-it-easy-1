const formatTvName = (tv) => {
    const {brand, type, name} = tv;

    const formattedName = `${brand} ${type} - ${name}`;

    return formattedName;
};

export default formatTvName;