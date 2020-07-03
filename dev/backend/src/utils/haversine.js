function haversineCalc(threatLat, threatLng, heroLat, heroLng) {
  const R = 6371;
  const dLat = (heroLat - threatLat) * (Math.PI / 180);
  const dLon = (heroLng - threatLng) * (Math.PI / 180);

  const a =
    Math.sin(dLat / 2) * Math.sin(dLat / 2) +
    Math.cos(threatLat * (Math.PI / 180)) *
      Math.cos(heroLat * (Math.PI / 180)) *
      Math.sin(dLon / 2) *
      Math.sin(dLon / 2);
  const c = 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1 - a));
  const d = R * c;

  return d;
}

module.exports = haversineCalc;
