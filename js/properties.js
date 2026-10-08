// properties.js
// ---------------------------------------------------------------
// All the properties are kept in ONE list here, and the cards on the
// page are built from it. To add, remove or change a property you only
// need to edit this list.
//
// Each property has:
//   type      - the label on the card (Luxury Villa, Apartment, Penthouse)
//   price     - a plain number in dollars (no commas, the commas are added below)
//   address   - the full address
//   bedrooms, bathrooms - how many
//   area      - size in square metres (just the number)
//   floor     - the floor, written as text (like "3rd")
//   parking   - number of parking spots
//   image     - the picture
//   alt       - a short description of the picture (for screen readers)
// ---------------------------------------------------------------

const properties = [
    {
        type: "Luxury Villa",
        price: 2262000,
        address: "18 New Street, Miami, FL 33139",
        bedrooms: 8,
        bathrooms: 8,
        area: 545,
        floor: "3rd",
        parking: 6,
        image: "assets/images/properties/property-01.jpg",
        alt: "Modern villa with a swimming pool"
    },
    {
        type: "Luxury Villa",
        price: 1180000,
        address: "54 Mid Street, Miami, FL 33127",
        bedrooms: 6,
        bathrooms: 5,
        area: 450,
        floor: "3rd",
        parking: 3,
        image: "assets/images/properties/property-02.jpg",
        alt: "Villa terrace with a pool and lounge chairs"
    },
    {
        type: "Luxury Villa",
        price: 1460000,
        address: "18 Old Street, Miami, FL 33131",
        bedrooms: 5,
        bathrooms: 4,
        area: 225,
        floor: "3rd",
        parking: 10,
        image: "assets/images/properties/property-03.jpg",
        alt: "Two-storey villa with glass balconies and a pool"
    },
    {
        type: "Apartment",
        price: 582000,
        address: "7 Bay Street, Miami, FL 33154",
        bedrooms: 4,
        bathrooms: 3,
        area: 125,
        floor: "25th",
        parking: 2,
        image: "assets/images/properties/property-04.jpg",
        alt: "Bright living room with a fireplace and tall windows"
    },
    {
        type: "Penthouse",
        price: 925000,
        address: "34 Beach Street, Miami, FL 33160",
        bedrooms: 4,
        bathrooms: 4,
        area: 180,
        floor: "38th",
        parking: 2,
        image: "assets/images/properties/property-05.jpg",
        alt: "Living room with a grey sofa and a wall-mounted TV"
    },
    {
        type: "Apartment",
        price: 450000,
        address: "42 Ocean Street, Miami, FL 33141",
        bedrooms: 4,
        bathrooms: 4,
        area: 165,
        floor: "26th",
        parking: 3,
        image: "assets/images/properties/property-06.jpg",
        alt: "Kitchen with a white island and pendant lights"
    }
];


// Build one card for every property in the list above
const propertyList = document.getElementById("propertyList");

properties.forEach(function (property) {
    // toLocaleString puts the commas in the price: 2262000 becomes 2,262,000
    const price = "$" + property.price.toLocaleString("en-US");

    // create the card box and fill it with the property details
    const card = document.createElement("div");
    card.className = "propertyContainer";

    card.innerHTML = `
        <div class="propertyPic">
            <img src="${property.image}" alt="${property.alt}">
        </div>
        <div class="propertyPrice">
            <p>${property.type}</p>
            <h3 class="price">${price}</h3>
        </div>
        <h3>${property.address}</h3>
        <div class="aboutProperty">
            <ul>
                <li>Bedrooms: <b>${property.bedrooms}</b></li>
                <li>Bathrooms: <b>${property.bathrooms}</b></li>
                <li>Area: <b>${property.area}m<sup>2</sup></b></li>
                <li>Floor: <b>${property.floor}</b></li>
                <li>Parking: <b>${property.parking} spots</b></li>
            </ul>
        </div>
        <hr>
        <a href="#scheduleVisit">Schedule a visit</a>
    `;

    // put the card on the page
    propertyList.appendChild(card);
});
