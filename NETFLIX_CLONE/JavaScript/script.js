const baseURL = "http://www.tvmaze.com/api";

function fetchJson(response) {
    return response.json();
}

function jsonName(json) {
    netFlixOnline(json);
}

function fetchError() {
    documentlocation.href = "error.html";
}

fetch(baseURL)
    .then(fetchJson)
    .then(jsonName)
    .catch(fetchError);

function netFlixOnline(series) {
    const results = series.results;
    const seriesCards = document.querySelector(".row.results");

    let = "";

    results.forEach(function(seriesString) {
        if (seriesString.type === "") {
            seriesString.type = "Unknown";
        } else {
            seriesString.type;
        }

    html += `
    <div class="col-sm-6 col-md-4 col-lg-3">
        <div class="card">
            <img
                class="image"
                src="https://"
                alt="Series name"
            />
            <div class="details">
                <h4 class="name">Character Name</h4>
                <p>Type: Type value here</p>
                <p>Episode count: Episode count here</p>
                <a class="btn btn-primary" href="details.html?id=">Details</a>
            </div>
        </div>
    </div>`;

    })
    seriesCards.innerHTML = html;
}