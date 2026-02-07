var timetable = {
    Monday: "New week,new goalsStart strong.\n6:00 – 7:00 AM → Wake up, exercise, freshen up\n7:00 – 9:00 AM → Study / Skill learning (DSA / Coding / Core subject)\n9:00 – 5:00 PM → College / Office / Main Work\n6:00 – 7:30 PM → Practice (coding problems / assignments)\n8:00 – 9:00 PM → Revision\n9:30 PM → Sleep",
    Tuesday: "Stay focused, stay consistent.\n6:00 – 7:00 AM → Wake up, exercise, freshen up\n7:00 – 9:00 AM → Study / Skill learning (Projects / New concepts)\n9:00 – 5:00 PM → College / Office / Main Work\n6:00 – 7:30 PM → Practice (project work / coding problems)\n8:00 – 9:00 PM → Revision\n9:30 PM → Sleep",
    Wednesday: "Halfway there. Keep pushing.\n6:00 – 7:00 AM → Wake up, exercise, freshen up\n7:00 – 9:00 AM → Practice problems / Mock tests\n9:00 – 5:00 PM → College / Office / Main Work\n6:00 – 7:30 PM → Analyze mistakes & improve\n8:00 – 9:00 PM → Revision\n9:30 PM → Sleep",
    Thursday: "Improve yourself a little every day.\n6:00 – 7:00 AM → Wake up, exercise, freshen up\n7:00 – 9:00 AM → Learn new topic / Skill upgrade\n9:00 – 5:00 PM → College / Office / Main Work\n6:00 – 7:30 PM → Improve weak areas\n8:00 – 9:00 PM → Revision\n9:30 PM → Sleep",
    Friday: "Finish strong. Success loves completion.\n6:00 – 7:00 AM → Wake up, light exercise, freshen up\n7:00 – 9:00 AM → Complete pending tasks\n9:00 – 5:00 PM → College / Office / Main Work\n6:00 – 7:30 PM → Weekly review\n8:00 – 9:00 PM → Light revision\n9:30 PM → Sleep",
    Saturday: "Learn more. Stress less.\n6:30 – 7:30 AM → Wake up, refresh, light exercise\n8:00 – 10:00 AM → Skill learning / Projects\n10:30 – 2:00 PM → Personal work / Rest\n4:00 – 6:00 PM → Practice / Revision\n8:00 – 9:00 PM → Light reading\n10:00 PM → Sleep",
    Sunday: "Rest, reflect, and reset.\n7:00 – 8:00 AM → Wake up, relax, freshen up\n9:00 – 11:00 AM → Weekly revision\n12:00 – 2:00 PM → Plan next week\n4:00 – 6:00 PM → Light study / Hobby\n8:00 – 9:00 PM → Mental rest\n9:30 PM → Sleep"
};

// DOM Access
var week = document.getElementsByClassName("weeks")[0];
var days = document.getElementsByClassName("day");
var infobox = document.getElementById("infobox");

// loop
for (var i = 0; i < days.length; i++) {
    days[i].addEventListener("mouseenter", function () {

        // remove old highlights
        for (var j = 0; j < days.length; j++) {
            days[j].classList.remove("highlights");
        }

        // add new highlights
        this.classList.add("highlights");

        var dayName = this.textContent.trim();

        // show timetable
        infobox.textContent = "Day: " + dayName + "\n\n" + "Time Table:\n" + timetable[dayName];
    });

    days[i].addEventListener("mouseleave", function () {
        this.classList.remove("highlights");
        infobox.textContent = "Hover on a day to see timetable!";
    });
}
