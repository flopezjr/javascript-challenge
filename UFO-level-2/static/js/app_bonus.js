//bring over level-1
function tableData(data) {
    
    let table = d3.select("#ufo-table")

    table.selectAll("tr").remove()
    
    // set up header row
    let headerRow = table.append("tr")

    headerRow.append("th").text("Datetime")
    headerRow.append("th").text("City")
    headerRow.append("th").text("State")
    headerRow.append("th").text("Country")
    headerRow.append("th").text("Shape")
    headerRow.append("th").text("Duration (min)")
    headerRow.append("th").text("Comments")

    // set up table body
    let tableBody = table.append("tbody")

    data.forEach((d) => {
        let row = tableBody.append("tr")
        row.append("td").text(d.datetime)
        row.append("td").text(d.city)
        row.append("td").text(d.state)
        row.append("td").text(d.country)
        row.append("td").text(d.shape)
        row.append("td").text(d.durationMinutes)
        row.append("td").text(d.comments)
    })

}

// create function to filter by date input
function handleClick() {
    let dateInput = d3.select("#datetime").property("value")
    let filteredDate = data.filter((d) => d.datetime === dateInput)

    tableData(filteredDate)
}

// pass id for button and function to click
d3.select("#filter-btn").on("click", handleClick)

/////
// Complete all of Level 1 criteria.

// Using multiple input tags and/or select dropdowns, write JavaScript code so the user can to set multiple filters and search for UFO sightings using the following criteria based on the table columns:

// date/time
// city
// state
// country
// shape

