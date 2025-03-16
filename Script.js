function calculateBets() {
    let bet1 = parseFloat(document.getElementById("bet1").value);
    let bet2 = parseFloat(document.getElementById("bet2").value);
    let payout = parseFloat(document.getElementById("payout").value);
    
    if (isNaN(bet1) || isNaN(bet2) || isNaN(payout) || bet1 <= 1 || bet2 <= 1 || payout <= 0) {
        document.getElementById("result").innerHTML = "Please enter valid numbers!";
        return;
    }

    let bet1Amount = (payout / bet1).toFixed(2);
    let bet2Amount = (payout / bet2).toFixed(2);
    let totalStake = (parseFloat(bet1Amount) + parseFloat(bet2Amount)).toFixed(2);

    document.getElementById("result").innerHTML = `
        Bet 1 Amount: ${bet1Amount} D <br>
        Bet 2 Amount: ${bet2Amount} D <br>
        Total Stake: ${totalStake} D
    `;
}

