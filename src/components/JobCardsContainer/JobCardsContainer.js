import React from "react";
import { JobCard } from "../JobCard/JobCard";
import { Box, Button, Grid } from "@mui/material";

const result = {
  search_metadata: {
    id: "64904decc9990365b011e749",
    status: "Success",
    json_endpoint: "https://serpapi.com/searches/880a689b806fe3c9/64904decc9990365b011e749.json",
    created_at: "2023-06-19 12:45:32 UTC",
    processed_at: "2023-06-19 12:45:32 UTC",
    google_jobs_url: "https://www.google.com/search?q=Barista&ibp=htl;jobs",
    raw_html_file: "https://serpapi.com/searches/880a689b806fe3c9/64904decc9990365b011e749.html",
    total_time_taken: 0.63,
  },
  search_parameters: {
    q: "Barista",
    engine: "google_jobs",
    google_domain: "google.com",
  },
  jobs_results: [
    {
      title: "Barista",
      company_name: "Moynihan Station",
      location: "  New York, NY   ",
      via: "via Harri",
      description:
        "maman is a french bakery, café and leading lifestyle brand founded in 2014 by owners elisa marshall & benjamin sormonte, with locations across north america and canada. inspired by family traditions, and the highest quality ingredients, maman offers a selection of delicious baked goods {including their famous nutty chocolate chip cookie}, coffee, fresh breakfast, and lunch options spanning from... hearty salads & sandwiches to savory quiches. in addition to hosting intimate events, maman has partnered with leading brands for partnerships and activations. from baby showers and birthday parties to engagements, they're able to help celebrate customers & make new beautiful memories. in september 2021, maman founders elisa marshall & benjamin sormonte released the highly anticipated maman: the cookbook.\n\nWe’re looking for a passionate barista to join our growing team! Our ideal candidate is someone who appreciates the quality of a delicious, well-crafted beverage and is passionate about delivering that experience to each guest that comes through our doors. When you join our team, you’ll be responsible for providing a welcoming environment, with customer service and quality at the center of everything you do. You’ll be able to speak authentically about who we are, as well as every item on our food and beverage menu. You love a good cup of coffee, and are always ready to lend a helping hand to a colleague, and you don’t take yourself too seriously. You will be based at any of the mamans. Is one particularly close to home? Let us know when you come in for an interview and we will do our best to accommodate!\n\nWhat you’ll do:\n• Create & serve our full beverage menu while upholding consistency of the maman beverage standards\n• Work with top of the industry equipment and high quality, locally roasted coffee\n• Manage your time effectively and multi-task with efficiency that does not compromise quality\n• Efficiently work on the barista station while delivering beautiful & artistic espresso beverages\n• Successfully communicate specials of the season & encourage guests to try our best selling items\n• Ensure return visitors and foster relationships with regulars through warm hospitality and impeccable service – do you know their order? Dial up the coffee without even asking!\n• Make decisions based on ensuring happiness for the guests, the team and the company while maximizing profitability\n• Always keep your barista station sparkling, no one likes working in a messy place!\n• Investigate and resolve any guest concerns\n• Assist with re-stocking at the end of your shift – team work makes the dream work, so set your self & your colleagues up for success\n\nWhat we're looking for:\n• You have third wave coffee experience\n• You have minimum 2 years barista experience\n• You are an experienced front of house professional with a sweet tooth for cookies\n• Hospitality is your passion; you make a point of keeping up with the latest industry trends & love latte art\n• Quality, aesthetics & top notch customer experience is a non-negotiable for you\n• You make people feel good—your team and guests alike\n• You work positively and collaboratively to achieve the highest standards of delivery\n• You learn quickly and are able to adapt to maman’s unique culture\n• Smart, no ego, upbeat, friendly, & efficiency oriented\n• Flexible schedule that will include weekends, holidays, and special events\n• If we get stuck in an elevator together, you’ll crack a joke and we’ll laugh along the way\n\nWhat's in it for you:\n• Join a fast-growing company committed not just to serving the best cookies & coffees but to building a national brand\n• Competitive salary, healthcare, & sweet perks for always going the extra mile and living our values\n• Training to get you settled into your role, learning opportunities to broaden your skill set & help you thrive at work\n• Great opportunity to progress with maman, internal mobility and growth will be encouraged when possible\n\nKeep in mind that maman is growing and developing everyday. We all do a little bit of everything & like to roll our sleeves up and get our hands dirty to help a colleague out.\n\nWe are looking for awesome, hard-working people that are all about creating the most memorable experience for every single maman customer.\n\nThank you for your interest in maman and look forward to chatting with all of you cookie monsters",
      job_highlights: [
        {
          title: "Qualifications",
          items: ["You have third wave coffee experience", "You have minimum 2 years barista experience", "You are an experienced front of house professional with a sweet tooth for cookies", "Hospitality is your passion; you make a point of keeping up with the latest industry trends & love latte art", "Quality, aesthetics & top notch customer experience is a non-negotiable for you", "You make people feel good—your team and guests alike", "You work positively and collaboratively to achieve the highest standards of delivery", "You learn quickly and are able to adapt to maman’s unique culture", "Smart, no ego, upbeat, friendly, & efficiency oriented"],
        },
        {
          title: "Responsibilities",
          items: [
            "When you join our team, you’ll be responsible for providing a welcoming environment, with customer service and quality at the center of everything you do",
            "You’ll be able to speak authentically about who we are, as well as every item on our food and beverage menu",
            "Create & serve our full beverage menu while upholding consistency of the maman beverage standards",
            "Work with top of the industry equipment and high quality, locally roasted coffee",
            "Manage your time effectively and multi-task with efficiency that does not compromise quality",
            "Efficiently work on the barista station while delivering beautiful & artistic espresso beverages",
            "Successfully communicate specials of the season & encourage guests to try our best selling items",
            "Ensure return visitors and foster relationships with regulars through warm hospitality and impeccable service – do you know their order?",
            "Dial up the coffee without even asking!",
            "Make decisions based on ensuring happiness for the guests, the team and the company while maximizing profitability",
            "Always keep your barista station sparkling, no one likes working in a messy place!",
            "Investigate and resolve any guest concerns",
            "Assist with re-stocking at the end of your shift – team work makes the dream work, so set your self & your colleagues up for success",
          ],
        },
        {
          title: "Benefits",
          items: ["Competitive salary, healthcare, & sweet perks for always going the extra mile and living our values", "Training to get you settled into your role, learning opportunities to broaden your skill set & help you thrive at work", "Great opportunity to progress with maman, internal mobility and growth will be encouraged when possible"],
        },
      ],
      related_links: [
        {
          link: "https://www.google.com/search?q=Moynihan+Station&sa=X&ved=0ahUKEwi854nIrs__AhWwFVkFHVPfD8AQmJACCNQJ",
          text: "See web results for Moynihan Station",
        },
      ],
      thumbnail: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRdxELw0A3eUfkIAwA7iHLn2DZUVzkXlPn78wyYzmA&s",
      extensions: ["3 days ago", "16–18 an hour", "Full-time", "No degree mentioned"],
      detected_extensions: {
        posted_at: "3 days ago",
        schedule_type: "Full-time",
        salary: "16–18 an hour",
      },
      job_id:
        "eyJqb2JfdGl0bGUiOiJCYXJpc3RhIiwiaHRpZG9jaWQiOiJkRHFiVmdwaHRYa0FBQUFBQUFBQUFBPT0iLCJmYyI6IkV1SUJDcUlCUVVWek4ycE9VMlY1TUVGaVdqVkVRbk5MWlZoZlduVmxiMVpvVDNORlNWbHVkSGg2Yms5UFRIRkpXRVpOWlVWMmExSkhhR05MVmtzNVNYRTVORkZKZDBoa05sRlRUbTF3VkhGWVdXUnFZMFJmWlZWdVFtOVdibHBwTFhSalprbGZiR1J0VFRBMVUxcEphelk0WmxaaVJIaHRNMjFhU25SMGEweE5aMnhqWVRkNmNIaDRaemw1ZFZneFVETmxha0pLY1hWU0xXbzVTSFpGYjI4MldGZDNXa2wzRWhjM1JUSlJXa3g2UWtWTVEzSTFUbTlRTURjMlgyZEJkeG9pUVU4dE1ISnNOMUUzVjNWcFYyeEZZVW96VlRkTFZHaHpTVVIxVkhNMVVGWktkdyIsImZjdiI6IjMiLCJmY19pZCI6ImZjXzEiLCJhcHBseV9saW5rIjp7InRpdGxlIjoiLm5GZzJlYntmb250LXdlaWdodDo1MDB9LkJpNkRkY3tmb250LXdlaWdodDo1MDB9QXBwbHkgb24gSGFycmkiLCJsaW5rIjoiaHR0cHM6Ly9oYXJyaS5jb20vTWFtYW4tTW95bmloYW4tU3RhdGlvbi9qb2IvMTkxNTAyOS1iYXJpc3RhP3V0bV9jYW1wYWlnbj1nb29nbGVfam9ic19hcHBseVx1MDAyNnV0bV9zb3VyY2U9Z29vZ2xlX2pvYnNfYXBwbHlcdTAwMjZ1dG1fbWVkaXVtPW9yZ2FuaWMifX0=",
    },
    {
      title: "Barista (Full Time)",
      company_name: "Busch's",
      location: "  Livonia, MI   ",
      via: "via Idaho Power Jobs",
      description:
        "Starting wage up to:$16.50/hr with exp.\n\nCalling all Foodies! Don’t romaine calm, Busch’s is HIRING! Do you love food, fun and people? Are you looking for growth, development and excellent wages? We could make the perfect pear...\n\nOur industry is ever changing and we are looking for individuals who are passionate about food and people. We are a family-owned, Michigan based company that is heavily rooted in the communities we serve. Busch’s offers its employees benefits such as employee discounts, medical benefits including dental and optical, 401K with company match (restrictions apply) and even tuition reimbursement for qualifying students!\n\nSpecific Accountabilities:\n• Provide guests with prompt, friendly service including determining their coffee interests and needs.\n• Educates guests by presenting and explaining the coffee drink menu and answering questions.\n• Provide quality beverages, whole bean and food products consistently for all guests by adhering to all recipe and presentation standards.\n• Record drink orders accurately and immediately after receipt into the register system.\n• Accept guest payment, process credit card charges and make change (if applicable)\n• Wash and sterilize equipment\n• Prepare garnishes for drinks\n• Follow health, safety and sanitation guidelines for all products.\n• Maintain cleanliness in all areas of the coffee station including counters, sinks, utensils, shelves and storage areas.\n• Report all equipment problems and maintenance issues to manager.\n• Stock and replenish inventory and supplies.\n• Demonstrate behaviors that will win guests for life.\n• Demonstrate personal accountability for meeting expectations, goals, and quality of work.\n• Communicate clearly and in a timely manner and use constructive feedback to make improvements.\n• Work together as one team by recognizing accomplishments, demonstrating respect and appreciation, and actively helping others.\n• Execute with operational integrity by anticipating problems, taking preventative measures, and adapting to changes that improve our operations or guest experience.\n• Consistently follow Busch’s policies and procedures.\n• Share our passion for our products by being familiar with our products and services and actively seeking and sharing that information.\n\nEducation, Experience and Skills:\n• High school diploma\n• Proficient communication and interpersonal skills, including written, verbal and listening skills\n• Proficient selling skills, including the ability to ask questions, listen, and make product recommendations\n• Proficient merchandising skills including fresh and appealing displays in service, self-service and bakery areas and effective cross merchandising throughout the store\n• Proficient cleaning abilities to meet sanitation and visual standards\n\nBusch’s is a family owned premier grocery retailer with multiple stores in Southeast Michigan. We are consistently recognized by our guests as an industry leader when it comes to service, product selection, store design and overall atmosphere. You can take pride in being a member of the Busch’s family and working in an environment where we truly care about our guests and the products we serve. We also take great care of the associates that take care of our guests. At Busch’s, we realize that without caring, motivated and personable associates, there would be no guests to serve",
      job_highlights: [
        {
          title: "Qualifications",
          items: ["High school diploma", "Proficient communication and interpersonal skills, including written, verbal and listening skills", "Proficient selling skills, including the ability to ask questions, listen, and make product recommendations", "Proficient merchandising skills including fresh and appealing displays in service, self-service and bakery areas and effective cross merchandising throughout the store", "Proficient cleaning abilities to meet sanitation and visual standards"],
        },
        {
          title: "Responsibilities",
          items: [
            "Provide guests with prompt, friendly service including determining their coffee interests and needs",
            "Educates guests by presenting and explaining the coffee drink menu and answering questions",
            "Provide quality beverages, whole bean and food products consistently for all guests by adhering to all recipe and presentation standards",
            "Record drink orders accurately and immediately after receipt into the register system",
            "Accept guest payment, process credit card charges and make change (if applicable)",
            "Wash and sterilize equipment",
            "Prepare garnishes for drinks",
            "Follow health, safety and sanitation guidelines for all products",
            "Maintain cleanliness in all areas of the coffee station including counters, sinks, utensils, shelves and storage areas",
            "Report all equipment problems and maintenance issues to manager",
            "Stock and replenish inventory and supplies",
            "Demonstrate behaviors that will win guests for life",
            "Demonstrate personal accountability for meeting expectations, goals, and quality of work",
            "Communicate clearly and in a timely manner and use constructive feedback to make improvements",
            "Work together as one team by recognizing accomplishments, demonstrating respect and appreciation, and actively helping others",
            "Execute with operational integrity by anticipating problems, taking preventative measures, and adapting to changes that improve our operations or guest experience",
            "Consistently follow Busch’s policies and procedures",
            "Share our passion for our products by being familiar with our products and services and actively seeking and sharing that information",
          ],
        },
        {
          title: "Benefits",
          items: ["Starting wage up to:$16.50/hr with exp", "Busch’s offers its employees benefits such as employee discounts, medical benefits including dental and optical, 401K with company match (restrictions apply) and even tuition reimbursement for qualifying students!"],
        },
      ],
      related_links: [
        {
          link: "https://www.google.com/search?q=Busch%27s&sa=X&ved=0ahUKEwi854nIrs__AhWwFVkFHVPfD8AQmJACCJwK",
          text: "See web results for Busch's",
        },
      ],
      extensions: ["2 days ago", "Full-time", "No degree mentioned", "Health insurance", "Dental insurance"],
      detected_extensions: {
        posted_at: "2 days ago",
        schedule_type: "Full-time",
      },
      job_id:
        "eyJqb2JfdGl0bGUiOiJCYXJpc3RhIChGdWxsIFRpbWUpIiwiaHRpZG9jaWQiOiJ1aVlrOXgycTlVY0FBQUFBQUFBQUFBPT0iLCJmYyI6IkV1SUJDcUlCUVVWek4ycE9VMlZsVVRKNk1VWlRkVTkxTmxGcGRsOW1kMkpoZVRGNFNYSnlRa3RyVGtOcldGTXdRbmRxUVVzemVrTklSbDkzYTBSUWIwVk1iekJpWnpSeGQzWldOMEpXZUhWS1ozQTJVRGhGYWpobVNXSkpPRzFpVWtwUk1rNHhhR2RKVTFGU1UxQnZjM0o0Y0dSa1prWm9kbEJ6ZW1OUmNuTkZkR1J6YlRGQ2JsRk5hVkkyU1VSaVZGOUhiWHB5WTAxeU9IQk5aMHd3Ymt0b1ZWbElabE5uRWhjM1JUSlJXa3g2UWtWTVEzSTFUbTlRTURjMlgyZEJkeG9pUVU4dE1ISnNOa1pPTVZwZmVFdFNjakpOYUVaaGQyTnRkMGRzVkRCYVpIWkVadyIsImZjdiI6IjMiLCJmY19pZCI6ImZjXzIiLCJhcHBseV9saW5rIjp7InRpdGxlIjoiQXBwbHkgb24gSWRhaG8gUG93ZXIgSm9icyIsImxpbmsiOiJodHRwczovL2lkYWhvcG93ZXIuZGVqb2JzLm9yZy9saXZvbmlhLW1pL2JhcmlzdGEtZnVsbC10aW1lL0Q2QzUxMjc5MkM5RTRENjJBMjc5ODI0NkREQzYzMzNDL2pvYi8/dXRtX3NvdXJjZT1SUitYTUwrRmVlZC1ERVx1MDAyNnV0bV9tZWRpdW09T3RoZXJcdTAwMjZ1dG1fY2FtcGFpZ249UlIrWE1MK0ZlZWRcdTAwMjZ1dG1fY2FtcGFpZ249Z29vZ2xlX2pvYnNfYXBwbHlcdTAwMjZ1dG1fc291cmNlPWdvb2dsZV9qb2JzX2FwcGx5XHUwMDI2dXRtX21lZGl1bT1vcmdhbmljIn19",
    },
    {
      title: "Barista",
      company_name: "Scooters Coffee",
      location: "  La Vista, NE   ",
      via: "via ZipRecruiter",
      description:
        "We're looking for Amazing People to serve Amazing Drinks, Amazingly fast!\n\nAre you looking for a fun and energetic work environment? Are you passionate about coffee...\n\nHere's what you bring:\n• A smile and a great attitude to work every day!\n• A desire to serve guests and meet new people\n• An ability thrive in a fast-paced environment\n• A willingness to motivate your team members\n\nYou bring the personality, we'll teach the coffee!\n\nHere's what we bring:\n• Cash Tips at the end of every shift!\n• Paid, Hands on Training\n• Free drinks on shift! (And discounted drinks off shift!)\n\nWe are open from 6:00 AM to 8:00 PM 7 days per week!\n\nCandidates are required to be 18 years or older.\n\nAre you looking for opportunities to grow within a company? We have a leadership team ready to invest in your growth with us. We are dedicated to creating an AMAZING experience for every life we touch, customer and employee alike!\n\nSCOOTER'S CREED\n\nSay it with a Smile\n\nMake Someone's Day Today\n\nImpact Others Positively\n\nLove Your Job and Let it Show\n\nEverything You Do Today Matters",
      job_highlights: [
        {
          title: "Qualifications",
          items: ["A smile and a great attitude to work every day!", "A desire to serve guests and meet new people", "An ability thrive in a fast-paced environment", "A willingness to motivate your team members", "Candidates are required to be 18 years or older"],
        },
        {
          title: "Benefits",
          items: ["Cash Tips at the end of every shift!", "Paid, Hands on Training", "Free drinks on shift!", "(And discounted drinks off shift!)"],
        },
      ],
      related_links: [
        {
          link: "http://scooterscoffee.com/",
          text: "scooterscoffee.com",
        },
        {
          link: "https://www.google.com/search?q=Scooters+Coffee&sa=X&ved=0ahUKEwi854nIrs__AhWwFVkFHVPfD8AQmJACCOQK",
          text: "See web results for Scooters Coffee",
        },
      ],
      thumbnail: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTPjKPfv5JxeD64XUpkonvOkk8pWGBsjEwvwtsg&s=0",
      extensions: ["3 days ago", "Full-time", "No degree mentioned"],
      detected_extensions: {
        posted_at: "3 days ago",
        schedule_type: "Full-time",
      },
      job_id:
        "eyJqb2JfdGl0bGUiOiJCYXJpc3RhIiwiaHRpZG9jaWQiOiJ1bjkxbXdmclpGOEFBQUFBQUFBQUFBPT0iLCJmYyI6IkV2Y0JDcmNCUVVWek4ycE9VV0l5TVZCNVdrRmlZamh5WVVKbllXUlpSa2xOWTBwS1EyOURaSGxLVkhNeWRIQTNhRVpYUzBselRrNXFURFJJZVhsbldXcG1hSHB6YTFkd1V6Sk1URFU0UlRkcFVVVm5jMFpSYzBSZlRGRmZjMWxJZVVWeVVsQjNPRGxTTVZSMVlXSlZOVTVzWTJscllVdGFiMWR5UlcxVllqZE9XRlZ2V0ZwbFNtdExRa1J3YzNKZldEVm1hMUpuUTI1elQzTjRSbmRzWDI1UWIwOWtaR05xU0dwTk1WVjVRM1JTVkRWck4zRjBSVmxmY0hkdkVoYzNSVEpSV2t4NlFrVk1RM0kxVG05UU1EYzJYMmRCZHhvaVFVOHRNSEpzTldkVVlqSnVaRTVNVFdGb01XdDJkRWs1YzJKVVpYRTVOMFV5VVEiLCJmY3YiOiIzIiwiZmNfaWQiOiJmY18zIiwiYXBwbHlfbGluayI6eyJ0aXRsZSI6IkFwcGx5IG9uIFppcFJlY3J1aXRlciIsImxpbmsiOiJodHRwczovL3d3dy56aXByZWNydWl0ZXIuY29tL2MvU2Nvb3RlcnMtQ29mZmVlL0pvYi9CYXJpc3RhLy1pbi1MYS1WaXN0YSxORT9qaWQ9MTYwZDIxNTcwNTk5OWJmZFx1MDAyNnV0bV9jYW1wYWlnbj1nb29nbGVfam9ic19hcHBseVx1MDAyNnV0bV9zb3VyY2U9Z29vZ2xlX2pvYnNfYXBwbHlcdTAwMjZ1dG1fbWVkaXVtPW9yZ2FuaWMifX0=",
    },
    {
      title: "Barista",
      company_name: "Legends",
      location: "  Frisco, TX   ",
      via: "via TeamWork Online",
      description:
        "The Role\n\nUnder the direction of the Catering Manager and Supervisor(s), is responsible for timely, efficient, accurate service for special function patrons and their dining experience...\n\nCompany Overview:\n\nLegends is a holistic agency that specializes in delivering solutions for legendary brands. We approach each project with our 360-degree service solution. Our Global Planning, Global Sales, and Hospitality service solutions collaborate on every project to ensure success across each of our six verticals including professional sports, collegiate, attractions, entertainment, international, and conventions.\n\nOur intellectual property is our people. It's our expertise that makes up Legends. We know what it's like to be on the team, business, or athletic department side, which drives our passion in creating solutions for our partners. Collectively, our leadership has over 300 years of experience in sales and sponsorship, analytics and valuation, hospitality and operations.\n\nResponsibilities:\n\nUnder the direction of the Catering Manager and Supervisor(s), is responsible for timely, efficient, accurate service for special function patrons and their dining experience.\n\nEssential Job Functions\n• Follows all Company drink recipes and procedures to provide high quality and consistent beverages to guest\n• Ensures that all customers are educated on our products and services.\n• Answers customer questions regarding coffee blends, preparation, and product freshness.\n• Greets all customers with fast, friendly, personalized service\n• Accurately rings sales orders into POS system and counts back change to customers in a courteous and friendly manner\n• Develops an understanding of coffee and tea regions and the various differences in flavor and blends.\n• Sells and serves baked goods and miscellaneous food items to customers\n• Maintains a clean and organized workspace so that partners can locate resources and product as needed\n• Other duties as assigned\n\nKnowledge, Skills and Ability\n\nThe individual must possess the following knowledge, skills and abilities and be able to explain and demonstrate that he or she can perform the essential functions of the job, with or without reasonable accommodation.\n• Excellent customer service\n• Can be trusted to act in a manner that is truthful and values direct, honest communication at all levels of the organization\n• Strong interpersonal skills; can effectively communicate and relate to all levels within and outside the organization; creates and builds positive and productive relationships\n• Responds quickly and effectively to changing trends and circumstances; embraces change and welcomes fresh perspectives; learns from past mistakes and adjusts accordingly\n• Ability to manage appropriate steps to get projects completed; has strong abilities to organize people and processes; can create a plan for resourceful workflow\n• Can manage people and resources to get projects completed; has a strong ability to multi-task and keep order.\n• Detail Oriented\n• Ability to work independently and/or in a team environment\n• Strong verbal and written communication skills\n• Must have computer skills: Microsoft Word, Excel.\n\nRequired Qualifications:\n• Must be able to stand for an extended period of time without aid\n• Must be fluent in English\n• Menu planning and development\n• Must be able to stand or walk for varying length of time\n• Must be available to work an irregular schedule\n• Must be able to work extended hours due to business requirements including late nights, weekends and holidays.\n\nPreferred Qualifications:\n• Must have at least 1 year experience in a high volume bar.\n• Must be able read, write, and speak in English.\n\nPhysical Requirements:\n• Ability to stand, sit, use of hands to handle, or feel, reach with hands and arms\n• Ability to lift and/ or move up to 25 pounds;\n• Specific vision abilities required by this job include close vision and distance vision\n\nEnvironmental Working Conditions:\n• The noise level in the work environment is usually moderate.\n\nLegends is an Equal Opportunity employer. All qualified applicants will receive consideration for employment without regard to race, color, religion, sex, age, national origin, disability, or genetic information",
      job_highlights: [
        {
          title: "Qualifications",
          items: [
            "The individual must possess the following knowledge, skills and abilities and be able to explain and demonstrate that he or she can perform the essential functions of the job, with or without reasonable accommodation",
            "Can be trusted to act in a manner that is truthful and values direct, honest communication at all levels of the organization",
            "Strong interpersonal skills; can effectively communicate and relate to all levels within and outside the organization; creates and builds positive and productive relationships",
            "Responds quickly and effectively to changing trends and circumstances; embraces change and welcomes fresh perspectives; learns from past mistakes and adjusts accordingly",
            "Ability to manage appropriate steps to get projects completed; has strong abilities to organize people and processes; can create a plan for resourceful workflow",
            "Can manage people and resources to get projects completed; has a strong ability to multi-task and keep order",
            "Detail Oriented",
            "Ability to work independently and/or in a team environment",
            "Strong verbal and written communication skills",
            "Must have computer skills: Microsoft Word, Excel",
            "Must be able to stand for an extended period of time without aid",
            "Must be fluent in English",
            "Menu planning and development",
            "Must be able to stand or walk for varying length of time",
            "Must be available to work an irregular schedule",
            "Must be able to work extended hours due to business requirements including late nights, weekends and holidays",
            "Ability to stand, sit, use of hands to handle, or feel, reach with hands and arms",
            "Ability to lift and/ or move up to 25 pounds;",
            "Specific vision abilities required by this job include close vision and distance vision",
          ],
        },
        {
          title: "Responsibilities",
          items: [
            "Under the direction of the Catering Manager and Supervisor(s), is responsible for timely, efficient, accurate service for special function patrons and their dining experience",
            "Follows all Company drink recipes and procedures to provide high quality and consistent beverages to guest",
            "Ensures that all customers are educated on our products and services",
            "Answers customer questions regarding coffee blends, preparation, and product freshness",
            "Greets all customers with fast, friendly, personalized service",
            "Accurately rings sales orders into POS system and counts back change to customers in a courteous and friendly manner",
            "Develops an understanding of coffee and tea regions and the various differences in flavor and blends",
            "Sells and serves baked goods and miscellaneous food items to customers",
            "Maintains a clean and organized workspace so that partners can locate resources and product as needed",
            "Other duties as assigned",
          ],
        },
      ],
      related_links: [
        {
          link: "https://www.google.com/search?q=Legends&sa=X&ved=0ahUKEwi854nIrs__AhWwFVkFHVPfD8AQmJACCK0L",
          text: "See web results for Legends",
        },
      ],
      extensions: ["4 days ago", "Full-time", "No degree mentioned"],
      detected_extensions: {
        posted_at: "4 days ago",
        schedule_type: "Full-time",
      },
      job_id:
        "eyJqb2JfdGl0bGUiOiJCYXJpc3RhIiwiaHRpZG9jaWQiOiJaNDFDaHYyYUFJUUFBQUFBQUFBQUFBPT0iLCJmYyI6IkVzd0JDb3dCUVVWek4ycE9VbkpvVW1sUlowMVdURUl6YnkxM2IwNWhXRGcxWXpaeFYzcFdjVGx3T0VjeVpVVlJhRmxKU0ZkU1ZYTnVjMUZPVWxWZmJuSlJRMXAzYzBSa1RHRkNTWFpaYVZSS1NHbE1aVXRuTFdveVRWbFNNalpzYTJKdFgyazFkRGREVGtkRVVHSm9NV3RIV0hOQmNYb3hhRTV2VERjeWJtVjJaekUzUzJ4a09UZElPRGhvZGxabmFFZ1NGemRGTWxGYVRIcENSVXhEY2pWT2IxQXdOelpmWjBGM0dpSkJUeTB3Y213MGVXTlRPWFJsT1RWTlJFNHhXRFEyZDNoaUxYTlBXWGwzZWpCQiIsImZjdiI6IjMiLCJmY19pZCI6ImZjXzUiLCJhcHBseV9saW5rIjp7InRpdGxlIjoiQXBwbHkgb24gVGVhbVdvcmsgT25saW5lIiwibGluayI6Imh0dHBzOi8vd3d3LnRlYW13b3Jrb25saW5lLmNvbS9tdWx0aXBsZS1wcm9wZXJ0aWVzL2xlZ2VuZHNobS9sZWdlbmRzL2JhcmlzdGEtMjA0NjAwMT91dG1fY2FtcGFpZ249Z29vZ2xlX2pvYnNfYXBwbHlcdTAwMjZ1dG1fc291cmNlPWdvb2dsZV9qb2JzX2FwcGx5XHUwMDI2dXRtX21lZGl1bT1vcmdhbmljIn19",
    },
    {
      title: "Barista",
      company_name: "Scooters Coffee",
      location: "  Vinita, OK   ",
      via: "via Salary.com",
      description:
        "DESCRIPTION\n\nThe Barista creates a memorable customer experience by providing fast, friendly service and consistent, quality products. This role is responsible for performing all job duties in a manner consistent with current company processes and procedures and maintaining all food safety and sanitation standards...\n\nESSENTIAL DUTIES & RESPONSIBILITIES:\n• Greet and connect with each customer\n\n• Welcome questions and seek opportunities to educate on our products • Suggestively sell gift cards, complementary/additional products, and merchandise\n\n• Solicit order, enter sale, and process payment in a timely and friendly fashion • Manage cash drawer, following established cash handling procedures • Serve all customer orders according to recipe and aesthetic guidelines • Deliver products within established speed of service guidelines and identify drink upon delivery\n• Operate and maintain cleanliness of all store equipment\n• Optimize workflow efficiency by restocking workstations, food, supplies, and merchandise\n• Maintain cleanliness of coworker and customer areas\n• Demonstrate genuine appreciation to each customer\n\nQUALIFICATIONS\n• Passion for people\n• Ability to work cooperatively in a team environment\n• Commitment to master brand recipes and techniques\n• Dependability\n• Energetic, fast-paced, flexible work style\n• Ability to learn quickly, problem solve, and handle multiple duties\n\nDisclaimer\n\nThe functions and skills described here are general in nature and represent the type of work performed, but they do not constitute an exhaustive list of the duties and responsibilities performed on the job.\n\nwww.scooterscoffee.com\n\nEstablished in 1998, Scooter's Coffee has distinguished itself as one of the premiere specialty coffee companies in the industry. Scooter's Coffee may be one of the fastest-growing specialty coffee brands, but simplicity is at our core: sustainably-sourced ingredients we handcraft into perfection. We believe in taking time to connect and create an amazing experience in each life we touch. At Scooters Coffee we live our core values of integrity, love, humility and courage and we are looking for talented, passionate, amazing people to join our team.\n\nYou are applying to work with a franchisee of Scooters Coffee. If hired, the franchisee will be your only employer. Franchisees are independent business owners who set own terms of employment, including wage and benefit programs, which can vary between franchisees.\n\nBrand: Scooters Coffee\n\nAddress: 594 E Illinois Ave Vinita, OK - 74301\n\nProperty Description: 0698 - Vinita, OK\n\nProperty Number: 0698",
      job_highlights: [
        {
          title: "Qualifications",
          items: ["Passion for people", "Ability to work cooperatively in a team environment", "Commitment to master brand recipes and techniques", "Dependability", "Energetic, fast-paced, flexible work style", "Ability to learn quickly, problem solve, and handle multiple duties"],
        },
        {
          title: "Responsibilities",
          items: [
            "This role is responsible for performing all job duties in a manner consistent with current company processes and procedures and maintaining all food safety and sanitation standards",
            "Greet and connect with each customer",
            "Welcome questions and seek opportunities to educate on our products",
            "Suggestively sell gift cards, complementary/additional products, and merchandise",
            "Solicit order, enter sale, and process payment in a timely and friendly fashion",
            "Manage cash drawer, following established cash handling procedures",
            "Serve all customer orders according to recipe and aesthetic guidelines",
            "Deliver products within established speed of service guidelines and identify drink upon delivery",
            "Operate and maintain cleanliness of all store equipment",
            "Optimize workflow efficiency by restocking workstations, food, supplies, and merchandise",
            "Maintain cleanliness of coworker and customer areas",
            "Demonstrate genuine appreciation to each customer",
          ],
        },
      ],
      related_links: [
        {
          link: "https://www.google.com/search?q=Scooters+Coffee&sa=X&ved=0ahUKEwi854nIrs__AhWwFVkFHVPfD8AQmJACCPUL",
          text: "See web results for Scooters Coffee",
        },
      ],
      extensions: ["6 days ago", "Full-time", "No degree mentioned"],
      detected_extensions: {
        posted_at: "6 days ago",
        schedule_type: "Full-time",
      },
      job_id:
        "eyJqb2JfdGl0bGUiOiJCYXJpc3RhIiwiaHRpZG9jaWQiOiJOMThNV2w2UlNGQUFBQUFBQUFBQUFBPT0iLCJmYyI6IkV1SUJDcUlCUVVWek4ycE9WSFpaVUZOcWVHOXNlRXg0TjJ0dmNGVkhhRVpIUm5SelIwMUxiVWxSU2xabFJGOUNVRnBIU2pWWlpqSnBVazlPVWpKUFNESk5kM1pITlZoVFFWcHZhekZCVW1OR01qbExhVU5TTkdad1MxQkhNbTVrTWpGa1kweFJiRWRtT0RGT1RsQTBTbUl5TVc1R1owbFpaRkpqVW5SRFoyZzFiRXhxU0ZsVFlWVnJVV3hFTVVkVWFsZDNTazl2Ukhwak16TkRXazB3WVdNd1QxWm9PWGxuRWhjM1JUSlJXa3g2UWtWTVEzSTFUbTlRTURjMlgyZEJkeG9pUVU4dE1ISnNORmRWTWtGQ2RXSnlVbkJLV0daWWJteHBibkpYVG5CV1dVUmhVUSIsImZjdiI6IjMiLCJmY19pZCI6ImZjXzYiLCJhcHBseV9saW5rIjp7InRpdGxlIjoiQXBwbHkgb24gU2FsYXJ5LmNvbSIsImxpbmsiOiJodHRwczovL3d3dy5zYWxhcnkuY29tL2pvYi9zY29vdGVycy1jb2ZmZWUvYmFyaXN0YS9qMjAyMzA2MTIyMjMyMDAyMzI2NTE3P3V0bV9jYW1wYWlnbj1nb29nbGVfam9ic19hcHBseVx1MDAyNnV0bV9zb3VyY2U9Z29vZ2xlX2pvYnNfYXBwbHlcdTAwMjZ1dG1fbWVkaXVtPW9yZ2FuaWMifX0=",
    },
    {
      title: "barista - Store# 65184, HWY 138 & SPRING",
      company_name: "Starbucks Coffee Company",
      location: "  Monroe, GA   ",
      via: "via Jobs At Starbucks",
      description:
        "Join us and inspire with every cup!\n\nAt Starbucks, it’s all about connection. People are at the heart of who we are, especially the people that are a part of our store team. We connect with each other, our customers and our communities to make a positive impact every day. We believe in working together to make a difference and in celebrating our shared success, which is why we call ourselves... Starbucks “partners.” Starbucks is a place of warmth and belonging, where everyone is welcome, and we value the unique experiences that each partner brings to our team!\n\nAs a Starbucks barista, you’ll create the Starbucks Experience for our customers through excellent service and expertly-crafted products. You’ll be in an energetic store environment where you’ll have the ability to master your food & beverage craft, work alongside friends and meet new people every day. A cup of coffee and smile can go a long way, and we believe our baristas have the power to be the best moment in each customer’s day. True to Our Mission & Values, working together we can inspire and nurture the human spirit – one person, one cup and one neighborhood at a time.\n\nYou’d make a great barista if you:\n• Consider yourself a “people person,” and enjoy meeting others.\n• Love working as a team and appreciate the chance to collaborate.\n• Understand how to create a great customer service experience.\n• Have a focus on quality and take pride in your work.\n• Are open to learning new things (especially the latest beverage recipe!)\n• Are comfortable with responsibilities like cash-handling and store safety.\n• Can keep cool and calm in a fast-paced, energetic work environment.\n• Can maintain a clean and organized workspace.\n• Have excellent communications skills.\n\nFrom free coffee to competitive pay, Starbucks is proud to offer a comprehensive compensation and benefits package to our eligible part-time and full-time partners. Benefits include 100% tuition coverage through our Starbucks College Achievement Plan, health coverage with a variety of plans to choose from, and stock & savings programs like our equity reward program, Bean Stock. What’s more, Starbucks offers flexible scheduling and opportunities for paid time off. Visit starbucksbenefits.com for details.\n\nBenefit Information\n\nSummary of Experience\n• No previous experience required\n\nBasic Qualifications\n• Maintain regular and consistent attendance and punctuality, with or without reasonable accommodation\n• Available to work flexible hours that may include early mornings, evenings, weekends, nights and/or holidays\n• Meet store operating policies and standards, including providing quality beverages and food products, cash handling and store safety and security, with or without reasonable accommodation\n• Engage with and understand our customers, including discovering and responding to customer needs through clear and pleasant communication\n• Prepare food and beverages to standard recipes or customized for customers, including recipe changes such as temperature, quantity of ingredients or substituted ingredients\n• Available to perform many different tasks within the store during each shift\n\nRequired Knowledge, Skills and Abilities\n• Ability to learn quickly\n• Ability to understand and carry out oral and written instructions and request clarification when needed\n• Strong interpersonal skills\n• Ability to work as part of a team\n• Ability to build relationships\n\nAll qualified applicants will receive consideration for employment without regard to race, color, religion, sex, sexual orientation, gender identity, national origin, disability, or status as a protected veteran.\n\nWe are committed to creating a diverse and welcoming workplace that includes partners with diverse backgrounds and experiences. We believe that enables us to better meet our mission and values while serving customers throughout our global communities. People of color, women, LGBTQIA+, veterans and persons with disabilities are encouraged to apply.\n\nQualified applicants with criminal histories will be considered for employment in a manner consistent with all federal state and local ordinances. Starbucks Corporation is committed to offering reasonable accommodations to job applicants with disabilities. If you need assistance or an accommodation due to a disability, please contact us at applicantaccommodation@starbucks.com",
      job_highlights: [
        {
          title: "Qualifications",
          items: [
            "Consider yourself a “people person,” and enjoy meeting others",
            "Love working as a team and appreciate the chance to collaborate",
            "Understand how to create a great customer service experience",
            "Are open to learning new things (especially the latest beverage recipe!)",
            "Are comfortable with responsibilities like cash-handling and store safety",
            "Can keep cool and calm in a fast-paced, energetic work environment",
            "Can maintain a clean and organized workspace",
            "Have excellent communications skills",
            "No previous experience required",
            "Maintain regular and consistent attendance and punctuality, with or without reasonable accommodation",
            "Available to work flexible hours that may include early mornings, evenings, weekends, nights and/or holidays",
            "Meet store operating policies and standards, including providing quality beverages and food products, cash handling and store safety and security, with or without reasonable accommodation",
            "Engage with and understand our customers, including discovering and responding to customer needs through clear and pleasant communication",
            "Ability to learn quickly",
            "Ability to understand and carry out oral and written instructions and request clarification when needed",
            "Strong interpersonal skills",
            "Ability to work as part of a team",
            "Ability to build relationships",
          ],
        },
        {
          title: "Responsibilities",
          items: ["Prepare food and beverages to standard recipes or customized for customers, including recipe changes such as temperature, quantity of ingredients or substituted ingredients"],
        },
        {
          title: "Benefits",
          items: ["From free coffee to competitive pay, Starbucks is proud to offer a comprehensive compensation and benefits package to our eligible part-time and full-time partners", "Benefits include 100% tuition coverage through our Starbucks College Achievement Plan, health coverage with a variety of plans to choose from, and stock & savings programs like our equity reward program, Bean Stock", "What’s more, Starbucks offers flexible scheduling and opportunities for paid time off"],
        },
      ],
      related_links: [
        {
          link: "http://www.starbucks.com/",
          text: "starbucks.com",
        },
        {
          link: "https://www.google.com/search?q=Starbucks+Coffee+Company&sa=X&ved=0ahUKEwi854nIrs__AhWwFVkFHVPfD8AQmJACCL4M",
          text: "See web results for Starbucks Coffee Company",
        },
      ],
      thumbnail: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ4YWVxFkISWdAJPuBAl25zM3R5_CdH5W4kL65S&s=0",
      extensions: ["3 days ago", "Full-time", "No degree mentioned", "Health insurance", "Paid time off"],
      detected_extensions: {
        posted_at: "3 days ago",
        schedule_type: "Full-time",
      },
      job_id:
        "eyJqb2JfdGl0bGUiOiJiYXJpc3RhIC0gU3RvcmUjIDY1MTg0LCBIV1kgMTM4IFx1MDAyNiBTUFJJTkciLCJodGlkb2NpZCI6IlppellISVBXYjI4QUFBQUFBQUFBQUE9PSIsImZjIjoiRXFJQ0N1SUJRVVZ6TjJwT1ZESnBjMHhtVVhGTVUwRTRSMHgwWjJ0a1RsZFFVa00zVEdZNFUxcHJlRGhGYmxkRE5EZG1TRGx2ZGpGMlZHTk9iMDluYmpoQmExaFFSVkJRYXpGSVVDMTVZMHROZERneE9FbEVjMDVLZWtKb1pHbDVkbDlyVmpoNlpXWlhVRzlmVDI1d1ZqWk9RM0oxUjBOdlJsb3RPV1ZJWDJwWFluZEVOelZaV1V4c2JVSllNbkpyU1haMVMzQjFTVk5mWVhkTE1UbFpPR1ZPTVV4V2FtNDJjakI1WTNKV1NVNHpNek53UkZCVlRsQklXRmxGYmt4WU5WRktaelJ4ZEVsUFkwaERhakl5YzFBNVpDMWZSM2RwYjNsNVlrMXRaWFp4VlZnMldrZFZaeElYTjBVeVVWcE1la0pGVEVOeU5VNXZVREEzTmw5blFYY2FJa0ZQTFRCeWJEYzBSazQzVnkxRFJ5MUJkM0YyWkZCelpVZDRiSEJLZW1VNVgxRSIsImZjdiI6IjMiLCJmY19pZCI6ImZjXzciLCJhcHBseV9saW5rIjp7InRpdGxlIjoiQXBwbHkgb24gSm9icyBBdCBTdGFyYnVja3MiLCJsaW5rIjoiaHR0cHM6Ly9hcHBseS5zdGFyYnVja3MuY29tL2NhcmVlcnMvam9iLzQ4MTA1MzAyOTYxOC1iYXJpc3RhLXN0b3JlLTY1MTg0LWh3eS0xMzgtc3ByaW5nLTczMC1nYS0xMzgtbW9ucm9lLWdlb3JnaWEtdW5pdGVkLXN0YXRlcz9kb21haW49c3RhcmJ1Y2tzLmNvbVx1MDAyNnV0bV9jYW1wYWlnbj1nb29nbGVfam9ic19hcHBseVx1MDAyNnV0bV9zb3VyY2U9Z29vZ2xlX2pvYnNfYXBwbHlcdTAwMjZ1dG1fbWVkaXVtPW9yZ2FuaWMifX0=",
    },
    {
      title: "Starbucks Barista",
      company_name: "Kroger",
      location: "  Ellensburg, WA   ",
      via: "via The Muse",
      description:
        "Company Name:Fred Meyer\nPosition Type:Employee\nFLSA Status:Non-exempt...\nMinimum Pay Range:15.74\nMaximum Pay Range:17.00\n\nPosition Summary:\n\nExceed service standards by providing customers with prompt, quality coffee selection, purchase, and preparation. Demonstrate the company's core values of respect, honesty, integrity, diversity, inclusion and safety.\n\nEssential Job Functions:\n• Model Customer 1st behavior; deliver and encourage other associates to deliver excellent customer service\n• Promote and follow company initiatives\n• Greet customers, answer questions, and suggest product to enhance service and meet sales goals\n• Maintain cleanliness of customer service area and equipment\n• Prepare a variety of customer beverage orders such as espresso drinks and Coffee of the Day to standard\n• Follow store policies and procedures\n• Perform cleaning tasks in accordance with the Duty Rosters and cleaning standards\n• Follow standards for merchandising, stocking, rotating, and storing all products\n• Follow cash handling and register policies\n• Follow inventory stocking and recording guidelines\n• Must be able to perform the essential functions of this position with or without reasonable accommodation\n\nMinimum Position Qualifications/Education:\n• High school diploma or general education degree (GED), plus six months of experience in customer service; or combination of relevant education and experience\n• Minimum 16 years of age in AK/18 years of age in OR & WA/19 years of age in Idaho\n• Ability to pass drug test\n• Ability to complete Initial Store Training and pass barista certification with a score of 90% or better\n• Ability to work in a fast-paced environment\n• Ability to work weekends on a regular basis, work any shift and work overtime as needed\n• Accuracy/attention to detail\n• Ability to organize/prioritize tasks/projects\n\nDesired Previous Job Experience/Education:\n• Knowledge of Fred Meyer policies, procedures, and organizational structure\n• Familiarity with industry/technical terms and processes\n\nThe final rate of pay is determined at store level based on prior equivalent work experience.\n\nTo support and reward our hardworking and friendly associates, we offer much more than just a paycheck. We strive to feed your future by offering the ingredients you need to create your own recipe for success at work and in life. Our associates receive a full plate of benefits that promote their physical, emotional and financial well-being, including access to competitive health care and retirement benefits, paid time off, mental health resources, associate discounts and opportunities to learn, grow and advance. Our associates also get to help us make a difference in our communities through our Zero Hunger | Zero Waste and Framework for Action: Diversity, Equity and Inclusion plans. Visit the thekrogerco.com to learn more about our work in the communities we serve and how our associates help us be a good neighbor.\n\nBelow is a list of some of the benefits we offer our associates.\n\nHealth & Well-being Benefits:\n• Health care benefits\n• Paid time off such as vacation, sick leave, and parental leave\n• Mental and emotional support resources through our Employee Assistance Program\n\nFinancial Benefits:\n• Participation in a 401(k) plan and/or participation in a Taft-Hartley pension fund, subject to certain eligibility requirements\n• Group term life insurance eligible, depending on varying criteria by location and subject to certain eligibility requirements\n• Associate discounts\n\nGrowth and Development Benefits:\n• Tuition assistance, college scholarships and educational leave of absence, depending on varying criteria by location and subject to certain eligibility requirements\n• Robust internal training and development resources to grow your career\n\nWe want the best for associates and our customers, and together, we strive to create a welcoming and engaging environment where you'll love to work. If you are interested in becoming a valued member of our team, apply now. We look forward to getting to know you!\n\nEducation Level: None\nRequired Certifications/Licenses: None\nPosition Type: Part-Time\nShift(s): Day; Evening\nRegions: West\n\nStates: Washington\nKeywords",
      job_highlights: [
        {
          title: "Qualifications",
          items: ["High school diploma or general education degree (GED), plus six months of experience in customer service; or combination of relevant education and experience", "Minimum 16 years of age in AK/18 years of age in OR & WA/19 years of age in Idaho", "Ability to pass drug test", "Ability to complete Initial Store Training and pass barista certification with a score of 90% or better", "Ability to work in a fast-paced environment", "Ability to work weekends on a regular basis, work any shift and work overtime as needed", "Accuracy/attention to detail", "Ability to organize/prioritize tasks/projects"],
        },
        {
          title: "Responsibilities",
          items: [
            "Exceed service standards by providing customers with prompt, quality coffee selection, purchase, and preparation",
            "Demonstrate the company's core values of respect, honesty, integrity, diversity, inclusion and safety",
            "Model Customer 1st behavior; deliver and encourage other associates to deliver excellent customer service",
            "Promote and follow company initiatives",
            "Greet customers, answer questions, and suggest product to enhance service and meet sales goals",
            "Maintain cleanliness of customer service area and equipment",
            "Prepare a variety of customer beverage orders such as espresso drinks and Coffee of the Day to standard",
            "Follow store policies and procedures",
            "Perform cleaning tasks in accordance with the Duty Rosters and cleaning standards",
            "Follow standards for merchandising, stocking, rotating, and storing all products",
            "Follow cash handling and register policies",
            "Follow inventory stocking and recording guidelines",
            "Must be able to perform the essential functions of this position with or without reasonable accommodation",
          ],
        },
        {
          title: "Benefits",
          items: [
            "Minimum Pay Range:15.74",
            "Maximum Pay Range:17.00",
            "The final rate of pay is determined at store level based on prior equivalent work experience",
            "To support and reward our hardworking and friendly associates, we offer much more than just a paycheck",
            "Our associates receive a full plate of benefits that promote their physical, emotional and financial well-being, including access to competitive health care and retirement benefits, paid time off, mental health resources, associate discounts and opportunities to learn, grow and advance",
            "Paid time off such as vacation, sick leave, and parental leave",
            "Mental and emotional support resources through our Employee Assistance Program",
            "Participation in a 401(k) plan and/or participation in a Taft-Hartley pension fund, subject to certain eligibility requirements",
            "Group term life insurance eligible, depending on varying criteria by location and subject to certain eligibility requirements",
            "Tuition assistance, college scholarships and educational leave of absence, depending on varying criteria by location and subject to certain eligibility requirements",
            "Robust internal training and development resources to grow your career",
          ],
        },
      ],
      related_links: [
        {
          link: "http://www.thekrogerco.com/",
          text: "thekrogerco.com",
        },
        {
          link: "https://www.google.com/search?q=Kroger&sa=X&ved=0ahUKEwi854nIrs__AhWwFVkFHVPfD8AQmJACCIwN",
          text: "See web results for Kroger",
        },
      ],
      thumbnail: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTUvdTfhm9982opiJjn5RbpTMe-6tD7wjOzim-8MSvvyYB46w4RwP1Nges&s",
      extensions: ["5 days ago", "Part-time", "Health insurance", "Dental insurance", "Paid time off"],
      detected_extensions: {
        posted_at: "5 days ago",
        schedule_type: "Part-time",
      },
      job_id:
        "eyJqb2JfdGl0bGUiOiJTdGFyYnVja3MgQmFyaXN0YSIsImh0aWRvY2lkIjoiVWx6TEdGRWZmZFFBQUFBQUFBQUFBQT09IiwiZmMiOiJFdmNCQ3JjQlFVVnpOMnBPVTNWaWVVODRORlF5Tm1wWlpqWkZNMmhWVm1kTWF6ZEtOREpSVG1FMk1sTnlRa0pvUlROT1ZXZ3RZV2h4U1ZCRlVFRmhjRTQwYzNOT1ZpMXVkWGh0YzFCdVUyRnVZVFo0VDNScWNscG1URXhVVUdGemJIVmpNMU5OVFcwMlZreEpTbWxYWjBOaGFVUndUMjkyU0ZkZlgxa3dXVlIzTWw5QmF6ZG5UaTFpU0dndE0waEZSV2hCU1ZKcGVETllOR2h6VDFKeE0xVm9WRlpqT0dKS2JtNDRiSGR0VDE5NVJIUk9Vak5CVDA1WGJrNVJFaGMzUlRKUldreDZRa1ZNUTNJMVRtOVFNRGMyWDJkQmR4b2lRVTh0TUhKc05uUlVjV1JpVEVseFdsTkROVGR3Y0RCRVNrbE1jRzA0VnpSRFVRIiwiZmN2IjoiMyIsImZjX2lkIjoiZmNfOSIsImFwcGx5X2xpbmsiOnsidGl0bGUiOiJBcHBseSBvbiBUaGUgTXVzZSIsImxpbmsiOiJodHRwczovL3d3dy50aGVtdXNlLmNvbS9qb2JzL2tyb2dlci9zdGFyYnVja3MtYmFyaXN0YS1hNTk4NWY/dXRtX2NhbXBhaWduPWdvb2dsZV9qb2JzX2FwcGx5XHUwMDI2dXRtX3NvdXJjZT1nb29nbGVfam9ic19hcHBseVx1MDAyNnV0bV9tZWRpdW09b3JnYW5pYyJ9fQ==",
    },
    {
      title: "BARISTA",
      company_name: "Commander, Navy Installations",
      location: "  Washington   ",
      via: "via USAJobs",
      description: "Prepare and serve made-to-order espresso.",
      job_highlights: [
        {
          title: "Responsibilities",
          items: ["Prepare and serve made-to-order espresso"],
        },
      ],
      related_links: [
        {
          link: "https://www.cnic.navy.mil/",
          text: "cnic.navy.mil",
        },
        {
          link: "https://www.google.com/search?q=Commander,+Navy+Installations&sa=X&ved=0ahUKEwi854nIrs__AhWwFVkFHVPfD8AQmJACCMoN",
          text: "See web results for Commander, Navy Installations",
        },
      ],
      thumbnail: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQYXshWj_WO1zvZxQTL3tvTWkfYx1BjqiodE9H1&s=0",
      extensions: ["17.32 an hour", "Full-time", "No degree mentioned"],
      detected_extensions: {
        schedule_type: "Full-time",
        salary: "17.32 an hour",
      },
      job_id:
        "eyJqb2JfdGl0bGUiOiJCQVJJU1RBIiwiaHRpZG9jaWQiOiJoTTRnTVlwRFZBQUFBQUFBQUFBQUFBPT0iLCJmYyI6IkV2Y0JDcmNCUVVWek4ycE9WRk4wTkY4MVkxOVRabWRZZGxKYU5WODBXVGhWWnpsWmJtVllXWFl3WkhoR1JXNDROelk0VW13M1oybG1OSE15YTNaclNUTmFkRzgxWVdJNFMzcHVNVkZwUlVZMloxbHJNRlp6WVhOdVMxTTBUWGxaTVVOUlN6TlBPWEZtV0ZCcExYZEdiekp1UVZkUmRuZGZibmN6TldkR1lYZGtORkJ2T0hCTk5WVkJWRTloTlVONmJHMVlPVUUyTVVSTWEwaDVObWhxYkdWdk9UUkxaalV3V1ZGVVVUWnViRUp3U3pSWVdGSnlTa1p1TkRJMEVoYzNSVEpSV2t4NlFrVk1RM0kxVG05UU1EYzJYMmRCZHhvaVFVOHRNSEpzTmxoQldHUmlTbHBYY2pndE1EZG1hVFZXY0ZjM2RVZHFkVjl2VVEiLCJmY3YiOiIzIiwiZmNfaWQiOiJmY18xMSIsImFwcGx5X2xpbmsiOnsidGl0bGUiOiJBcHBseSBvbiBVU0FKb2JzIiwibGluayI6Imh0dHBzOi8vd3d3LnVzYWpvYnMuZ292L0dldEpvYi9WaWV3RGV0YWlscy83MDIyNzUxMDA/dXRtX2NhbXBhaWduPWdvb2dsZV9qb2JzX2FwcGx5XHUwMDI2dXRtX3NvdXJjZT1nb29nbGVfam9ic19hcHBseVx1MDAyNnV0bV9tZWRpdW09b3JnYW5pYyJ9fQ==",
    },
    {
      title: "Barista",
      company_name: "The Human Bean",
      location: "  Carrollton, TX   ",
      via: "via ZipRecruiter",
      description:
        "JOB DESCRIPTION\n\nWe’re looking for an enthusiastic barista to join our growing team at The Human Bean...\n\nDuties/Responsibilities:\n• Provide excellent customer service\n• Prepare and serve beverages to customers, in accordance with customer requests\n• Follow proper payment handling procedures\n• Keep location inviting and clean\n• Follow health, safety, and sanitation guidelines\n\nBenefits of working with us:\n• Fun and welcoming team-oriented environment\n• Great Tips\n• Employee discounts\n• Opportunities to grow professionally within our company\n\nREQUIREMENTS\n• Prior experience as a barista is admired, but not required\n• Exhibit good manners, neat appearance, and proper personal hygiene\n• Ability to work flexible hours\n• An outgoing personality with good verbal communication and basic math skills\n\nABOUT THE COMPANY\n\nThe Human Bean quickly established a reputation for having friendly and experienced baristas and offering the highest quality ingredients",
      job_highlights: [
        {
          title: "Qualifications",
          items: ["Prior experience as a barista is admired, but not required", "Exhibit good manners, neat appearance, and proper personal hygiene", "Ability to work flexible hours", "An outgoing personality with good verbal communication and basic math skills"],
        },
        {
          title: "Responsibilities",
          items: ["Provide excellent customer service", "Prepare and serve beverages to customers, in accordance with customer requests", "Follow proper payment handling procedures", "Keep location inviting and clean", "Follow health, safety, and sanitation guidelines"],
        },
        {
          title: "Benefits",
          items: ["Fun and welcoming team-oriented environment", "Great Tips", "Employee discounts", "Opportunities to grow professionally within our company"],
        },
      ],
      related_links: [
        {
          link: "http://thehumanbean.com/",
          text: "thehumanbean.com",
        },
        {
          link: "https://www.google.com/search?q=The+Human+Bean&sa=X&ved=0ahUKEwi854nIrs__AhWwFVkFHVPfD8AQmJACCJIO",
          text: "See web results for The Human Bean",
        },
      ],
      thumbnail: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRCDvJMtnjnks7BEN0mjvXlXADFMsUealOAy71e&s=0",
      extensions: ["5 days ago", "10–11 an hour", "Full-time", "No degree mentioned"],
      detected_extensions: {
        posted_at: "5 days ago",
        schedule_type: "Full-time",
        salary: "10–11 an hour",
      },
      job_id:
        "eyJqb2JfdGl0bGUiOiJCYXJpc3RhIiwiaHRpZG9jaWQiOiJIb0hFakxmY25va0FBQUFBQUFBQUFBPT0iLCJmYyI6IkV2Y0JDcmNCUVVWek4ycE9VaTFET0ZGWVJEY3RYMXBGUm0xclVrRkZNbUZGVXpWTlltMVdXVXBzZWt0dmRGRmZOMkp6UWxSeWFYWlVjbVpoTW1ScGNscHJOblp3TVhNeVFUWkZSRU0zWkUxQ2QxZElVVXQ2TUVsUGExZzBjRlJQYjFNelExQm9PVjh3WkhoMlJubDZURXRFUXpFdGJVNWtibHBzY1ZKWFVWZ3dTMWh1U2s5ck1VcGFUSEZqWVVvNVluSjZkMncxVkVjNVVrOXJaR3hPWkZsU1NGZGZhRlZoU0dRNVVIWnhORWRRU0RsSFpYRndiakZuU1RGQkVoYzNSVEpSV2t4NlFrVk1RM0kxVG05UU1EYzJYMmRCZHhvaVFVOHRNSEpzTkZCWE9FWTFSa0ZEVlRsdFFtdGxUMVJUUlRCbk5uZHRNSFZtUVEiLCJmY3YiOiIzIiwiZmNfaWQiOiJmY18xMyIsImFwcGx5X2xpbmsiOnsidGl0bGUiOiJBcHBseSBkaXJlY3RseSBvbiBaaXBSZWNydWl0ZXIiLCJsaW5rIjoiaHR0cHM6Ly93d3cuemlwcmVjcnVpdGVyLmNvbS9jL1RoZS1IdW1hbi1CZWFuL0pvYi9CYXJpc3RhLy1pbi1DYXJyb2xsdG9uLFRYP2ppZD05NGEzYWFmM2UyMWIzYzkxXHUwMDI2dXRtX2NhbXBhaWduPWdvb2dsZV9qb2JzX2FwcGx5XHUwMDI2dXRtX3NvdXJjZT1nb29nbGVfam9ic19hcHBseVx1MDAyNnV0bV9tZWRpdW09b3JnYW5pYyJ9fQ==",
    },
    {
      title: "Starbucks Barista (T1956)",
      company_name: "TARGET",
      location: "  Trumbull, CT   ",
      via: "via Target Careers",
      description:
        "Starting Hourly Rate / Salario por Hora Inicial: $17.00 USD\n\nALL ABOUT TARGET...\n\nAs a Fortune 50 company with more than 400,000 team members worldwide, Target is an iconic brand and one of America's leading retailers.\n\nWorking at Target means the opportunity to help all families discover the joy of everyday life. Caring for our communities is woven into who we are, and we invest in the places we collectively live, work and play. We prioritize relationships, fuel and develop talent by creating growth opportunities, and succeed as one Target team. At our core, our purpose is ingrained in who we are, what we value, and how we work. It's how we care, grow, and win together.\n\nWe work together to provide the guest a fresh, full, and food safe shopping experience all day, every day.\n\nALL ABOUT FOOD & BEVERAGE\n\nThe Food & Beverage team enables a consistent experience for our guests by ensuring product is fresh, in stock, available and accurately priced and signed on the sales floor. They are experts of operations, process and efficiency. This team leads food and food services including replenishment, inventory accuracy, food safety, presentation, pricing and promotional signing processes for all Food and Beverage areas of the store.\n\nAt Target, we believe in our team members having meaningful experiences that help them build and develop skills for a career. The role of a Starbucks Barista can provide you with the:\n• Knowledge of guest service fundamentals and experience building a guest first culture in Starbucks\n• Ability to provide a consistent Starbucks experience for guests by curating handcrafted Starbucks’ products\n• Experience with food quality and freshness management\n• Knowledge of state and federal food safety and OSHA guidelines\n\nAs a Starbucks Barista, no two days are ever the same, but a typical day will most likely include the following responsibilities:\n• Deliver an exceptional guest experience, connecting with guests to deliver quality handcrafted beverages and food during all hours of operations, prioritizing the guest’s needs over task\n• Uphold and maintain the execution of the Food and Beverage Standards, all Starbucks’ brand standards and food safety standards\n• Execute food and beverage processes, including food deliveries, replenishment, pulls, stocking, zoning, instocks routines, data accuracy, culling, rotation, cleaning, defect, signing and backstock\n• Maintain an on-going awareness of all promotional activities within Starbucks\n• Follow all Target and Starbucks routines to deliver a consistent Starbucks experience for guests while driving efficiency and maintaining food safety\n• Maintain an inviting dining area for guests all day, every day\n• Engage with guests to meet and exceed their expectations based on Starbucks standards\n• Produce items to specifications on production cards and follow specific department routines\n• Monitor and record temperature-sensitive food items as outlined in best practices\n• Complete and record all cleaning tasks in the Starbucks space as outlined in best practices\n• Follow proper packaging and labeling guidelines for food products\n• Follow all food safety requirements as outlined through best practice\n• Locate and identify damaged, recalled or expired items and process according to best practice\n• Ensure accurate in-stocks by placing store-initiated orders according to best practices\n• Follow proper perishable inventory procedures to ensure an accurate recording of inventory\n• Execute sampling best practices\n• Create a welcoming experience by authentically greeting all guests\n• Observe to quickly understand whether a guest needs assistance or wants to interact. Follow body language and verbal clues to tailor your approach\n• Engage with guests in a genuine way, which includes asking questions to better understand their specific needs\n• Be knowledgeable about the tools, products, and services available in the total store, and specific to your area, to solve issues for the guest and improve their experience\n• Thank the guest in a genuine way and let them know we’re happy they chose to shop at Target\n• Complete all required Starbucks trainings\n• Demonstrate a culture of ethical conduct, safety and compliance\n• Work in a safe manner at all times to benefit yourself and others; identify and correct hazards; comply with all safety policies and best practices\n• Support guest services such as back-up cashier, order pick up (OPU) and Drive-up (DU) and maintain a compliance culture while executing those duties, such as compliance with federal, state, and local adult beverage laws\n• All other duties based on business needs\n\nWHAT WE ARE LOOKING FOR\n\nWe might be a great match if:\n• Working in a fun and energetic environment makes you excited…. We work efficiently and as a team to deliver for our guests\n• Providing service to our guests that makes them say I LOVE TARGET! excites you…. That’s why we love working at Target\n• Stocking, Setting and Selling Target products sounds like your thing… That’s the core of what we do\n• You aren’t looking for Monday thru Friday job where you are at a computer all day… We are busy all day (especially on the weekends), making it easy for the guest to feel welcomed, inspired and rewarded\n\nThe good news is that we have some amazing training that will help teach you everything you need to know to be a Starbucks Barista. But, there are a few skills you should have from the get-go:\n• Previous Starbucks/food service experience preferred, but not required\n• Welcoming and helpful attitude toward guests and other team members\n• Learn and adapt to current technology needs\n• Work both independently and with a team\n• Resolve guest questions quickly on the spot\n• Attention to detail and follow a multi-step processes\n\nWe are an awesome place to work and care about our teams, so we want to make sure we are clear on a few more basics that we expect:\n• Accurately handle cash register operations\n• Climb up and down ladders\n• Scan, handle and move merchandise efficiently and safely, including frequently lifting or moving merchandise up to 40 pounds\n• Flexible work schedule (e.g., nights, weekends and holidays) and regular attendance necessary\n• Handle and move merchandise in coolers and freezers up to 40 pounds\n• Ability to work in spaces where common allergens may be handled or present\n\nAmericans with Disabilities Act (ADA)\n\nTarget will provide reasonable accommodations (such as a qualified sign language interpreter or other personal assistance) with the application process upon your request as required to comply with applicable laws. If you have a disability and require assistance in this application process, please visit your nearest Target store or Distribution Center or reach out to Guest Services at 1-800-440-0680 for additional information",
      job_highlights: [
        {
          title: "Qualifications",
          items: [
            "Ability to provide a consistent Starbucks experience for guests by curating handcrafted Starbucks’ products",
            "Knowledge of state and federal food safety and OSHA guidelines",
            "Working in a fun and energetic environment makes you excited…",
            "Welcoming and helpful attitude toward guests and other team members",
            "Learn and adapt to current technology needs",
            "Work both independently and with a team",
            "Accurately handle cash register operations",
            "Climb up and down ladders",
            "Scan, handle and move merchandise efficiently and safely, including frequently lifting or moving merchandise up to 40 pounds",
            "Flexible work schedule (e.g., nights, weekends and holidays) and regular attendance necessary",
            "Handle and move merchandise in coolers and freezers up to 40 pounds",
            "Ability to work in spaces where common allergens may be handled or present",
          ],
        },
        {
          title: "Responsibilities",
          items: [
            "The Food & Beverage team enables a consistent experience for our guests by ensuring product is fresh, in stock, available and accurately priced and signed on the sales floor",
            "As a Starbucks Barista, no two days are ever the same, but a typical day will most likely include the following responsibilities:",
            "Deliver an exceptional guest experience, connecting with guests to deliver quality handcrafted beverages and food during all hours of operations, prioritizing the guest’s needs over task",
            "Uphold and maintain the execution of the Food and Beverage Standards, all Starbucks’ brand standards and food safety standards",
            "Execute food and beverage processes, including food deliveries, replenishment, pulls, stocking, zoning, instocks routines, data accuracy, culling, rotation, cleaning, defect, signing and backstock",
            "Maintain an on-going awareness of all promotional activities within Starbucks",
            "Follow all Target and Starbucks routines to deliver a consistent Starbucks experience for guests while driving efficiency and maintaining food safety",
            "Maintain an inviting dining area for guests all day, every day",
            "Engage with guests to meet and exceed their expectations based on Starbucks standards",
            "Produce items to specifications on production cards and follow specific department routines",
            "Monitor and record temperature-sensitive food items as outlined in best practices",
            "Complete and record all cleaning tasks in the Starbucks space as outlined in best practices",
            "Follow proper packaging and labeling guidelines for food products",
            "Follow all food safety requirements as outlined through best practice",
            "Locate and identify damaged, recalled or expired items and process according to best practice",
            "Ensure accurate in-stocks by placing store-initiated orders according to best practices",
            "Follow proper perishable inventory procedures to ensure an accurate recording of inventory",
            "Execute sampling best practices",
            "Create a welcoming experience by authentically greeting all guests",
            "Observe to quickly understand whether a guest needs assistance or wants to interact",
            "Follow body language and verbal clues to tailor your approach",
            "Engage with guests in a genuine way, which includes asking questions to better understand their specific needs",
            "Be knowledgeable about the tools, products, and services available in the total store, and specific to your area, to solve issues for the guest and improve their experience",
            "Thank the guest in a genuine way and let them know we’re happy they chose to shop at Target",
            "Complete all required Starbucks trainings",
            "Demonstrate a culture of ethical conduct, safety and compliance",
            "Work in a safe manner at all times to benefit yourself and others; identify and correct hazards; comply with all safety policies and best practices",
            "Support guest services such as back-up cashier, order pick up (OPU) and Drive-up (DU) and maintain a compliance culture while executing those duties, such as compliance with federal, state, and local adult beverage laws",
            "All other duties based on business needs",
            "Providing service to our guests that makes them say I LOVE TARGET!",
          ],
        },
        {
          title: "Benefits",
          items: ["Starting Hourly Rate / Salario por Hora Inicial: $17.00 USD"],
        },
      ],
      related_links: [
        {
          link: "https://www.target.com/",
          text: "target.com",
        },
        {
          link: "https://www.google.com/search?q=TARGET&sa=X&ved=0ahUKEwi854nIrs__AhWwFVkFHVPfD8AQmJACCNoO",
          text: "See web results for TARGET",
        },
      ],
      extensions: ["5 days ago", "Full-time", "No degree mentioned"],
      detected_extensions: {
        posted_at: "5 days ago",
        schedule_type: "Full-time",
      },
      job_id:
        "eyJqb2JfdGl0bGUiOiJTdGFyYnVja3MgQmFyaXN0YSAoVDE5NTYpIiwiaHRpZG9jaWQiOiJKQ2M3VmhzdHk3d0FBQUFBQUFBQUFBPT0iLCJmYyI6IkV2Y0JDcmNCUVVWek4ycE9VelV3ZVhaMVFWZFVXbUZPZEhCUGJFRnVNbk5MU2pGdVJrOXFOR1pPT1ZOclRteElaR2czZUhSRE5qSmFSSHB3U2kxMFdERlZNWGhvUTJGc1MwRm9ZVk5oTTNob1praEZabE5tYkdGbmIybHNiWFZQZFhodGVHbzFUakYxVGpadmNGVm1OR05SVGxKdk1ERlFUSEpSUlRoeWRsbHZhbUp3YW5CaGVFRkJaV0pUTVc1WU5tdzRkemxLWmtaWlNVeDBhVkpJZGkxeU5ESm1OMDVKVjJsb2JIcFhORVEwUVRKelMxcDNURU5pYUZJNEVoYzNSVEpSV2t4NlFrVk1RM0kxVG05UU1EYzJYMmRCZHhvaVFVOHRNSEpzTmt4M1YzbHdXSGhUYTFOSGREaDNjRmxEVm5abFgzWldjWGx5ZHciLCJmY3YiOiIzIiwiZmNfaWQiOiJmY18xNSIsImFwcGx5X2xpbmsiOnsidGl0bGUiOiJBcHBseSBvbiBUYXJnZXQgQ2FyZWVycyIsImxpbmsiOiJodHRwczovL2pvYnMudGFyZ2V0LmNvbS9qb2IvdHJ1bWJ1bGwvc3RhcmJ1Y2tzLWJhcmlzdGEtdDE5NTYvMTExOC81MDMzNzU4MjMwND91dG1fY2FtcGFpZ249Z29vZ2xlX2pvYnNfYXBwbHlcdTAwMjZ1dG1fc291cmNlPWdvb2dsZV9qb2JzX2FwcGx5XHUwMDI2dXRtX21lZGl1bT1vcmdhbmljIn19",
    },
  ],
  chips: [
    {
      type: "Title",
      param: "job_family_1",
      options: [
        {
          text: "All",
        },
        {
          text: "Barista",
          value: "barista",
        },
        {
          text: "Starbucks barista",
          value: "starbucks barista",
        },
        {
          text: "Team member",
          value: "team member",
        },
        {
          text: "Cafe",
          value: "cafe",
        },
        {
          text: "Associate",
          value: "associate",
        },
        {
          text: "Attendant",
          value: "attendant",
        },
        {
          text: "Sales manager",
          value: "sales manager",
        },
        {
          text: "Server",
          value: "server",
        },
      ],
    },
    {
      type: "Location",
      param: "city",
      options: [
        {
          text: "All",
        },
        {
          text: "New York, NY",
          value: "Owg_06VPwoli_nfhBo8LyA==",
        },
        {
          text: "Chicago, IL",
          value: "7cv00DwsDogAwMAJrabgrw==",
        },
        {
          text: "Boca Raton, FL",
          value: "J_s278Ij2YjJlWDK7qY-0g==",
        },
        {
          text: "Charlotte, NC",
          value: "gRo4_MQfVIhk0UO_5lBGiA==",
        },
        {
          text: "Los Angeles, CA",
          value: "E9on3F3HwoD0CEYlb98v4g==",
        },
        {
          text: "Omaha, NE",
          value: "7fwMtciNk4cEtjeuT01CRg==",
        },
        {
          text: "Houston, TX",
          value: "AYWNSLS4QIY7BWXz3gINyg==",
        },
        {
          text: "Livonia, MI",
          value: "eze6BgezJIj-o5IZN8KC1w==",
        },
        {
          text: "Seattle, WA",
          value: "VTPokywQkFSa1URpRmUlEA==",
        },
        {
          text: "Atlanta, GA",
          value: "jQmTaV0E9YgLYwuZL97-Zg==",
        },
        {
          text: "Bethesda, MD",
          value: "LQIkarfLt4kNzStq93myJg==",
        },
        {
          text: "Birmingham, AL",
          value: "07-FWN8RiYjOVLrqCXRQJQ==",
        },
        {
          text: "Boston, MA",
          value: "GzE9DS1l44mg6GIBJL98eA==",
        },
        {
          text: "Carrollton, TX",
          value: "H1fduyshTIZdHYSzSf0enA==",
        },
        {
          text: "Charleston, SC",
          value: "dySo3EJ6_ohr7OGu4Pf6NQ==",
        },
        {
          text: "Cleveland, OH",
          value: "LWto4y7vMIhCGGL3VcsE7Q==",
        },
        {
          text: "Corvallis, OR",
          value: "fdcUqp1AwFS-wL0ij4AN1w==",
        },
        {
          text: "Denver, CO",
          value: "zxcfI6qAa4fWNoon-PSOEQ==",
        },
        {
          text: "Kansas City, MO",
          value: "l5npr173wIeiUapq5iWFVQ==",
        },
        {
          text: "Las Vegas, NV",
          value: "0X31pIK3voCjebPV5tXMOg==",
        },
        {
          text: "Nashville, TN",
          value: "PZDrEzLsZIig2umh0Lk_fQ==",
        },
        {
          text: "Newark, DE",
          value: "64mX45p6x4lcOEyX8kbiLg==",
        },
        {
          text: "Overland Park, KS",
          value: "0zgmp1GVwIfI-UQ460_OJA==",
        },
        {
          text: "Pasadena, CA",
          value: "UQszONzCwoBKj9EaFkErBQ==",
        },
        {
          text: "Pittsburgh, PA",
          value: "A4UGSG_xNIg0G6JaoRX5jQ==",
        },
        {
          text: "Richardson, TX",
          value: "Z6e-eekeTIaVBCdGwCnbLA==",
        },
        {
          text: "Rochester, MN",
          value: "Syxfo0tf94c9xmFWFxyV8A==",
        },
        {
          text: "Saint Paul, MN",
          value: "nzfp5M7UslIpLto_0pFyyA==",
        },
        {
          text: "San Francisco, CA",
          value: "IQBpAG2ahYD_rXbwZxNQSg==",
        },
        {
          text: "Aberdeen, SD",
          value: "t_FLNpFE0lI1rMfP8-tQMA==",
        },
        {
          text: "Adel, IA",
          value: "uUA1XCg57IfswUJBXR1YhA==",
        },
        {
          text: "Alameda, CA",
          value: "lRXP8tiAj4AUbwFgz5n_Zg==",
        },
        {
          text: "Albany, NY",
          value: "S_tPzDQK3onEKOegEmOh4Q==",
        },
        {
          text: "Albuquerque, NM",
          value: "e4MJ090KIof99tm4zvjTwA==",
        },
        {
          text: "Allen Park, MI",
          value: "m5Yp_mI2O4g9H_5DnnfWmw==",
        },
        {
          text: "Alpharetta, GA",
          value: "N_XFaJ909YhOTGUoYdUSwQ==",
        },
        {
          text: "Altamonte Springs, FL",
          value: "cUuJA25x54ifxxMbdMLsGQ==",
        },
        {
          text: "American Fork, UT",
          value: "7a_8yhqBTYfUOeHln1TdhQ==",
        },
        {
          text: "Anaheim, CA",
          value: "Z-hVgPnW3IBgsSuaq4mrAQ==",
        },
        {
          text: "Anchorage, AK",
          value: "QT-zBHaRyFbjaISnWrp9JQ==",
        },
        {
          text: "Andover, KS",
          value: "y_Nbafr4uocwMSJTLo0NBw==",
        },
        {
          text: "Anniston, AL",
          value: "CV1UZ5xNiohYzYAIYGRtzw==",
        },
        {
          text: "Apex, NC",
          value: "0YCSwaOSrIkVgOIXfoHNhQ==",
        },
        {
          text: "Ardmore, OK",
          value: "na8fj68pTYay1JK-MAn8lw==",
        },
        {
          text: "Ardmore, PA",
          value: "P_NPdGLAxok-Lhj3vp0v8g==",
        },
        {
          text: "Asbury Park, NJ",
          value: "kcxLDJ8uwonwcq_I2CLtlA==",
        },
        {
          text: "Athens, AL",
          value: "kSds-AaLYoh6lsG7Ta_FXw==",
        },
        {
          text: "Athens, GA",
          value: "uTO0tBlt9oh8YZ3WAnJ0TQ==",
        },
        {
          text: "Auburn, AL",
          value: "g_ibsy_xjIhYk9M1kpElyw==",
        },
        {
          text: "Austin, TX",
          value: "LwPMoJm1RIZ61WnUS0abXQ==",
        },
        {
          text: "Baltimore, MD",
          value: "t4P01q4DyIlY5yNCqJZIBA==",
        },
        {
          text: "Batavia, NY",
          value: "8fiC-EPu04lVlNLVNN3lNw==",
        },
        {
          text: "Batesville, IN",
          value: "47tBB4-LaogcN1wpVEypNw==",
        },
      ],
    },
    {
      type: "Date posted",
      param: "date_posted",
      options: [
        {
          text: "All",
        },
        {
          text: "Past day",
          value: "today",
        },
        {
          text: "Past 3 days",
          value: "3days",
        },
        {
          text: "Past week",
          value: "week",
        },
        {
          text: "Past month",
          value: "month",
        },
      ],
    },
    {
      type: "Requirements",
      param: "requirements",
      options: [
        {
          text: "All",
        },
        {
          text: "No degree",
          value: "no_degree",
        },
        {
          text: "No experience",
          value: "no_experience",
        },
        {
          text: "Under 3 years of experience",
          value: "years3under",
        },
        {
          text: "3+ years of experience",
          value: "years3plus",
        },
      ],
    },
    {
      type: "Type",
      param: "employment_type",
      options: [
        {
          text: "All",
        },
        {
          text: "Full-time",
          value: "FULLTIME",
        },
        {
          text: "Part-time",
          value: "PARTTIME",
        },
        {
          text: "Contractor",
          value: "CONTRACTOR",
        },
        {
          text: "Internship",
          value: "INTERN",
        },
      ],
    },
    {
      type: "Company type",
      param: "industry.id",
      options: [
        {
          text: "All",
        },
        {
          text: "Restaurant",
          value: "/business/naics2007/722",
        },
        {
          text: "Retail",
          value: "/business/naics2007/44",
        },
        {
          text: "Foods & Beverages",
          value: "/business/naics2007/311",
        },
        {
          text: "Accommodation",
          value: "/business/naics2007/721",
        },
        {
          text: "Health Care",
          value: "/business/naics2007/62",
        },
        {
          text: "Education",
          value: "/business/naics2007/61",
        },
        {
          text: "Manufacturing",
          value: "/business/naics2007/31",
        },
        {
          text: "Staffing",
          value: "/business/naics2007/5613",
        },
        {
          text: "Construction",
          value: "/business/naics2007/23",
        },
        {
          text: "Engineering Services",
          value: "/business/naics2007/5413",
        },
        {
          text: "Entertainment",
          value: "/business/naics2007/71",
        },
        {
          text: "Textiles & Apparel",
          value: "/business/naics2007/313",
        },
        {
          text: "Wholesale",
          value: "/business/naics2007/42",
        },
      ],
    },
    {
      type: "Employer",
      param: "organization_mid",
      options: [
        {
          text: "All",
        },
        {
          text: "Scooters Coffee",
          value: "/m/0zn7pst",
        },
        {
          text: "Starbucks",
          value: "/m/018c_r",
        },
        {
          text: "Barnes & Noble",
          value: "/m/01b7dt",
        },
        {
          text: "TARGET",
          value: "/m/01b39j",
        },
        {
          text: "Compass Group",
          value: "/m/05s08r",
        },
        {
          text: "Sodexo",
          value: "/m/042phq",
        },
        {
          text: "Peet's Coffee & Tea",
          value: "/m/04_zkn",
        },
        {
          text: "The Cheesecake Factory",
          value: "/m/04n2g7",
        },
        {
          text: "Dunkin'",
          value: "/m/02ccc5",
        },
        {
          text: "Aramark",
          value: "/m/02twx1",
        },
        {
          text: "Turning Point",
          value: "/g/11c0q_blyp",
        },
        {
          text: "HMSHost",
          value: "/m/07b72m",
        },
        {
          text: "The Human Bean",
          value: "/m/04y84rj",
        },
        {
          text: "The Coffee Bean and Tea Leaf",
          value: "/m/05_746",
        },
        {
          text: "Aimbridge Hospitality",
          value: "/m/03y1x7v",
        },
        {
          text: "Marriott",
          value: "/m/04fv0k",
        },
        {
          text: "BIGGBY COFFEE",
          value: "/m/09dq3f",
        },
        {
          text: "Black Rock Coffee Bar",
          value: "/g/11hzcprhym",
        },
        {
          text: "Eataly North America",
          value: "/m/0dlk40j",
        },
        {
          text: "Kroger",
          value: "/m/0204w9",
        },
        {
          text: "La La Land Kind Cafe",
          value: "/g/11qbw4cd40",
        },
        {
          text: "SSA Group, LLC",
          value: "/g/11snrnmnwq",
        },
        {
          text: "Sage Hospitality",
          value: "/m/03d0f46",
        },
        {
          text: "ARC Holdings, LLC",
          value: "/g/11f01jl0h_",
        },
        {
          text: "Accor",
          value: "/m/0496mw",
        },
        {
          text: "Brookshire Grocery Company",
          value: "/m/06d6k3",
        },
        {
          text: "Caltech",
          value: "/m/02sjgpq",
        },
        {
          text: "City Furniture and Ashley HomeStore",
          value: "/m/07s815g",
        },
        {
          text: "City Market",
          value: "/m/05w6mb",
        },
        {
          text: "Commander, Navy Installations",
          value: "/m/03qkllg",
        },
        {
          text: "Costa Coffee",
          value: "/m/073hjd",
        },
      ],
    },
  ],
};

export const JobCardsContainer = ({ query, setChosenJob }) => {
  return (
    <>
      <Grid
        container
        rowSpacing={8}
        columnSpacing={3}
        width="80%"
        mx="auto"
        mt={8}
        mb={8}
      >
        {result.jobs_results.map((job_result) => {
          return (
            <Grid
              onClick={() => setChosenJob(job_result)}
              key={job_result.job_id}
              item
              xs={4}
            >
              <JobCard cardData={job_result} />
            </Grid>
          );
        })}
      </Grid>

      <Box textAlign="center" mb={3}>
        <Button
          variant="contained"
          sx={{ textTransform: "capitalize", boxShadow: "0" }}
          
        >
          Load More
        </Button>
      </Box>
    </>
  );
};
