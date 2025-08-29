const contenedorferiados = document.getElementById("feriados");

fetch("https://api.boostr.cl/holidays.json")
    .then((res) => res.json)
    .then((json) => {
        if(json.status != "success" || !Array.isArray(json.data)){
            throw new Error("error en la api");
        }
        const feriados = json.data;

        contenedorferiados.innerHTML = "";

        const tablaferiados = feriados
        .map(
            (f) => `
            <div class="card mb-3">
                <div class="card-body">
                    <h5 class = "card-title"> ${f.title} (${f.date})</h5>

                </div>
            </div>
                 
            `
        ).join("");


        contenedorferiados.innerHTML = tablaferiados;

    });