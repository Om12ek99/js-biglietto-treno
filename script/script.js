function calcolaPrezzo() {
    // Ottieni i valori inseriti dall'utente
    const km = parseFloat(document.getElementById('kmInput').value);
    const age = parseInt(document.getElementById('ageInput').value);

    // Verifica se i valori inseriti sono validi
    if (isNaN(km) || isNaN(age) || km <= 0 || age <= 0) {
      alert("Inserisci valori validi per i chilometri e l'età.");
      return;
    }

    // Calcola il prezzo totale del viaggio
    let prezzoTotale = km * 0.21; // Prezzo base per km

    // Applica gli sconti in base all'età
    if (age < 18  ) { // Sconto del 20% per i minorenni
      prezzoTotale *= 0.8;
    } else if (age >= 65) { // Sconto del 40% per gli over 65
      prezzoTotale *= 0.6;
    } 

    // Mostra il prezzo totale al cliente
    document.getElementById('prezzoOutput').innerText = "Prezzo totale del viaggio: " + prezzoTotale.toFixed(2) + "€";
  }