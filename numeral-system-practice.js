			const btn = document.querySelector('#btn');
			const sb = document.querySelector('#binOrHex');
			btn.onclick = (event) =>
			{
				startQuestion();
			}

			var QuestionNum, CorrectNum, decNum;
			var stelsels = [2, 8, 9, 16];
			var vragen = ["decimale", "decimaal", "binaire", "binair", "octale", "octaal", "novenaire", "novenair", "hexadecimale", "hexadecimaal"]
			var combs = [[2, 1], [0, 3], [4, 1], [0, 5], [6, 1], [0, 7], [8, 1], [0, 9]]

			function randomNumber(min, max) {return Math.floor(Math.random() * (max - min) + min);}

			function Check(e) {
				if(e.keyCode === 13){
					antwoord = document.getElementById("AntwoordInvoer").value;
					if (antwoord == CorrectNum) {
						alert("Dat klopt!!!");
						startQuestion();
					} else {
						alert("Fout!");
					}}}

			function startQuestion() {
				document.getElementById("AntwoordInvoer").value = "";
				var st = sb.selectedIndex;
				document.getElementById("VraagTekst").innerHTML = "Zet dit " + vragen[combs[st-1][0]] + " getal om in een " + vragen[combs[st-1][1]] +  " getal:";
				decNum = randomNumber(0, 255);
				if (st % 2 == 0) {
					QuestionNum = decNum;
					CorrectNum = decNum.toString(stelsels[Math.floor(st / 2 - 0.5)]);
				} else {
					CorrectNum = decNum;
					QuestionNum = decNum.toString(stelsels[Math.floor(st / 2 - 0.5)]);
				}
				document.getElementById("AntwoordInvoer").type="text";
				document.getElementById("VraagNummer").innerHTML = QuestionNum;
			}
