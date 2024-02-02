
exports.getAddress = async (lat,lon) =>{
    const res = await fetch(`https://geocode.maps.co/reverse?lat=${lat}&lon=${lon}&api_key=65b8b3b6426de349531284szh4731cb`);
    const data = res.json();
    return data;
}

