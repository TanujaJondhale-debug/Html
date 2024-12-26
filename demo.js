const students = [
    {
        name: "Alice",
        subjects: [
            { subject: "Math", marks: 85 },
            { subject: "Science", marks: 90 },
            { subject: "English", marks: 78 },
        ],
    },
    {
        name: "Bob",
        subjects: [
            { subject: "Math", marks: 65 },
            { subject: "Science", marks: 75 },
            { subject: "English", marks: 80 },
        ],
    },
    {
        name: "Charlie",
        subjects: [
            { subject: "Math", marks: 95 },
            { subject: "Science", marks: 85 },
            { subject: "English", marks: 92 },
        ],
    },
    {
        name: "Diana",
        subjects: [
            { subject: "Math", marks: 78 },
            { subject: "Science", marks: 88 },
            { subject: "English", marks: 84 },
        ],
    },
    {
        name: "Ethan",
        subjects: [
            { subject: "Math", marks: 80 },
            { subject: "Science", marks: 70 },
            { subject: "English", marks: 75 },
        ],
    },
    {
        name: "Fiona",
        subjects: [
            { subject: "Math", marks: 88 },
            { subject: "Science", marks: 92 },
            { subject: "English", marks: 81 },
        ],
    },
    {
        name: "George",
        subjects: [
            { subject: "Math", marks: 60 },
            { subject: "Science", marks: 65 },
            { subject: "English", marks: 70 },
        ],
    },
    {
        name: "Hannah",
        subjects: [
            { subject: "Math", marks: 90 },
            { subject: "Science", marks: 94 },
            { subject: "English", marks: 88 },
        ],
    },
    {
        name: "Ian",
        subjects: [
            { subject: "Math", marks: 75 },
            { subject: "Science", marks: 80 },
            { subject: "English", marks: 85 },
        ],
    },
    {
        name: "Julia",
        subjects: [
            { subject: "Math", marks: 85 },
            { subject: "Science", marks: 89 },
            { subject: "English", marks: 82 },
        ],
    },
];

console.log(students[0].name)
console.log("math : " + students[0].subjects[0].marks + " , science : " + students[0].subjects[1].marks + " , english : " + students[0].subjects[2].marks);
console.log((students[0].subjects[0].marks + students[0].subjects[1].marks + students[0].subjects[2].marks) / 3)
console.log("\n")

console.log(students[1].name)
console.log("math : " + students[1].subjects[0].marks + " , science : " + students[1].subjects[1].marks + " , english : " + students[1].subjects[2].marks);
console.log((students[1].subjects[0].marks + students[1].subjects[1].marks + students[1].subjects[2].marks) / 3)
console.log("\n")

console.log(students[2].name)
console.log("math : " + students[2].subjects[0].marks + " , science : " + students[2].subjects[1].marks + " , english : " + students[2].subjects[2].marks);
console.log((students[2].subjects[0].marks + students[2].subjects[1].marks + students[2].subjects[2].marks) / 3)
console.log("\n")

console.log(students[3].name)
console.log("math : " + students[0].subjects[0].marks + " , science : " + students[3].subjects[1].marks + " , english : " + students[3].subjects[2].marks);
console.log((students[3].subjects[0].marks + students[3].subjects[1].marks + students[3].subjects[2].marks) / 3)
console.log("\n")

console.log(students[4].name)
console.log("math : " + students[0].subjects[0].marks + " , science : " + students[4].subjects[1].marks + " , english : " + students[4].subjects[2].marks);
console.log((students[4].subjects[0].marks + students[4].subjects[1].marks + students[4].subjects[2].marks) / 3)
console.log("\n")

console.log(students[5].name)
console.log("math : " + students[0].subjects[0].marks + " , science : " + students[5].subjects[1].marks + " , english : " + students[5].subjects[2].marks);
console.log((students[5].subjects[0].marks + students[5].subjects[1].marks + students[5].subjects[2].marks) / 3)
console.log("\n")

console.log(students[6].name)
console.log("math : " + students[0].subjects[0].marks + " , science : " + students[6].subjects[1].marks + " , english : " + students[6].subjects[2].marks);
console.log((students[6].subjects[0].marks + students[6].subjects[1].marks + students[6].subjects[2].marks) / 3)
console.log("\n")

console.log(students[7].name)
console.log("math : " + students[0].subjects[0].marks + " , science : " + students[7].subjects[1].marks + " , english : " + students[7].subjects[2].marks);
console.log((students[7].subjects[0].marks + students[7].subjects[1].marks + students[7].subjects[2].marks) / 3)
console.log("\n")

console.log(students[8].name)
console.log("math : " + students[0].subjects[0].marks + " , science : " + students[8].subjects[1].marks + " , english : " + students[8].subjects[2].marks);
console.log((students[8].subjects[0].marks + students[8].subjects[1].marks + students[8].subjects[2].marks) / 3)
console.log("\n")

console.log(students[9].name)
console.log("math : " + students[0].subjects[0].marks + " , science : " + students[9].subjects[1].marks + " , english : " + students[9].subjects[2].marks);
console.log((students[9].subjects[0].marks + students[9].subjects[1].marks + students[9].subjects[2].marks) / 3)
console.log("\n")


const Amazon_Products = [
    {
        Name: "boAt Airdopes 141",
        brand_name: "boAt",
        Price: 998,
        Mrp: 4490,
        Rating: 4.0,
        Rating_count: 4678,
        Offers: [
            {
                offer_name: "Partner Offers",
                offer_description: "Get GST invoice and save up to 28% on business purchases.",
            },
            {
                offer_name: "Bank Offer",
                offer_description: "Flat INR 250 Instant Discount on HDFC Bank 3 month Credit Card EMI Trxn. Min purchase value INR 5000",
            }
        ],
        discription: [
             "Colour : Midnight Black",
             "Form Factor : True Wireless",
             "Model Name : Airdopes 91 Prime",
             "Connectivity Technology : Bluetooth"
        ],
        About: [
            "13 mm Drivers with boAt Signature Sound: High-performance 13 mm drivers in the boAt Airdopes 91 Prime TWS Earbuds are your gateway to the audio realm. Feel your favorite tunes come alive with the powerful bass of boAt Signature Sound every time you plug in your Airdopes.",
            "45 Hours of Playtime: Watch live games, listen to podcasts, or work out to your playlist for around 45 hours non-stop with these earbuds. Charge less and enjoy more!",
            "50 ms Latency BEAST Mode: Take out lag from the mix while gaming with BEAST mode. Once activated, the 50 ms low latency syncs virtual frames with power-packed audio for adrenaline-raising gaming sessions.",
            "Dual Mics with ENx Technology: Make calls on the go with the ENx-powered dual mics. Join work calls or catch up with friends from the airport lounge, café, metro, etc., without annoying background noise.",
            "ASAP Charge: Airdopes 91 Prime is your movie marathon partner for the long haul with its fast charging which lends a whopping 120 minutes of playtime when you charge the earbuds for just 10 minutes."
        ],
    },

];


console.log(Amazon_Products[0]);







