import { site, isTodo } from "@/config/site";

/** schema.org LodgingBusiness. Fields still set to TODO are omitted, never published. */
export function localBusinessSchema() {
  const a = site.address;
  const addressParts = [a.line1, a.locality, a.district, a.state];
  const hasAddress = addressParts.every((p) => !isTodo(p));

  return {
    "@context": "https://schema.org",
    "@type": ["LodgingBusiness", "LocalBusiness"],
    "@id": `${site.url}/#homestay`,
    name: site.name,
    description: `${site.name} offers ${site.room.count} double bedrooms near Malpe, Udupi with Wi-Fi, parking, soap and drinking water.`,
    url: site.url,
    image: [`${site.url}/og-image.jpg`],
    checkinTime: site.room.checkIn24,
    checkoutTime: site.room.checkOut24,
    numberOfRooms: site.room.count,
    ...(isTodo(site.phoneDisplay) ? {} : { telephone: site.phoneDisplay }),
    ...(isTodo(site.email) ? {} : { email: site.email }),
    ...(hasAddress
      ? {
          address: {
            "@type": "PostalAddress",
            streetAddress: a.line1,
            addressLocality: a.locality,
            addressRegion: a.state,
            ...(a.pin && !isTodo(a.pin) ? { postalCode: a.pin } : {}),
            addressCountry: a.country,
          },
        }
      : {}),
    ...(site.geo
      ? { geo: { "@type": "GeoCoordinates", latitude: site.geo.lat, longitude: site.geo.lng } }
      : {}),
    ...(isTodo(site.mapsLink) ? {} : { hasMap: site.mapsLink }),
    amenityFeature: [
      { "@type": "LocationFeatureSpecification", name: "Free Wi-Fi", value: true },
      { "@type": "LocationFeatureSpecification", name: "Parking", value: true },
      { "@type": "LocationFeatureSpecification", name: "Soap", value: true },
      { "@type": "LocationFeatureSpecification", name: "Drinking water bottle", value: true },
    ],
    ...(() => {
      const sameAs = [site.social.instagram, site.social.facebook].filter((s) => !isTodo(s));
      return sameAs.length ? { sameAs } : {};
    })(),
  };
}
