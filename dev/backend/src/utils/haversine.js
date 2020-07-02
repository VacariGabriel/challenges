function haversineCalc(ameacaLat, ameacaLng, heroiLat, heroiLng) {
  const R = 6371;
  const dLat = (heroiLat - ameacaLat) * (Math.PI / 180);
  const dLon = (heroiLng - ameacaLng) * (Math.PI / 180);

  const a =
    Math.sin(dLat / 2) * Math.sin(dLat / 2) +
    Math.cos(ameacaLat * (Math.PI / 180)) *
      Math.cos(heroiLat * (Math.PI / 180)) *
      Math.sin(dLon / 2) *
      Math.sin(dLon / 2);
  const c = 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1 - a));
  const d = R * c;

  return d;
}

module.exports = haversineCalc;
