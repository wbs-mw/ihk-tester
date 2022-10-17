questionList.push(mwPowerSupply1);
questionList.push(mwPowerSupply2);

function mwPowerSupply1() {
	let hoursPerDay = Math.randomInt(1, 24);
	let daysPerMonth = Math.randomInt(1, 30);
	let kwhPrice = Math.randomInt(10, 99);
	let pcaEfficiency = Math.randomInt(30, 95);
	let pcbEfficiency = Math.randomInt(30, 95);
	let performance = Math.randomInt(40, 100);

	let author = "wbs-mw";
	let body = `
		<p>Im Rahmen des Umzuges sollen einige PCs neu angeschafft werden. Der Kunde soll sich zwischen zwei PC-Varianten entscheiden.</br>Beide PC-Varianten sind nahezu baugleich bis auf das verwendete Netzteil.</p>
		<p>Sie wurden damit beauftragt, für eine Besprechung die Energieeffizienz der beiden PCs unter ökonomischen Gesichtspunkten zu vergleichen.</p>
		<h4>Betriebsstunden</h4>
		<ul>
			<li><b>${hoursPerDay}</b> Stunden pro Tag</li>
			<li>Betrieb an <b>${daysPerMonth}</b> Arbeitstagen pro Monat</li>
		</ul>
		<h4>Die beiden zu vergleichenden PCs sind wie folgt ausgestattet:</h4>
		<ul>
			<li>PC-A hat ein niedrigpreisiges Netzteil ohne Zertifikat.</li>
			<li>PC-B hat ein Netzteil nach dem 80Plus Gold Standard.</li>
		</ul>
		<p>a) Errechnen Sie die Leistung und die Energiekosten pro Monat, wenn eine kWh <b>${kwhPrice}</b> Cent kostet.</p>	
		<p>Dem englischsprachigen Manual des Netzteils können Sie folgende Definition entnehmen:</br>Efficiency = Useful pcPower output/Total pcPower input</p>
		<table>
			<thead>
				<tr>
					<td></td>
					<td>PC-A</td>
					<td>PC-B</td>
				</tr>
			</thead>
			<tbody>
				<tr>
					<td>Wirkungsgrad des Netzteils bei <b>${performance}</b> W in Prozent</td>
					<td>${pcaEfficiency} %</td>
					<td>${pcbEfficiency} %</td>
				</tr>
				<tr>
					<td>Durch die Komponenten des PCs benötigte durchschnittliche Leistung im Betrieb</td>
					<td>${performance} W</td>
					<td>${performance} W</td>
				</tr>
				<tr>
					<td>Vom Netzteil bezogene Leistung aus dem Stromnetz</td>
					<td>${(performance/pcaEfficiency*100).toFixed(0)} W</td>
					<td><input> W</td>
				</tr>
				<tr>
					<td>Energiekosten pro Monat in EUR</td>
					<td><input> EUR</td>
					<td><input> EUR</td>
				</tr>
			</tbody>
		</table>
	`;
	let answer = [
		(performance/pcbEfficiency*100).toFixed(0),
		((performance/pcaEfficiency*100) * (hoursPerDay * daysPerMonth) * (kwhPrice / 1000) / 100).toFixed(2),
		((performance/pcbEfficiency*100) * (hoursPerDay * daysPerMonth) * (kwhPrice / 1000) / 100).toFixed(2),
	];

	return new Question(author, body, answer);
}
function mwPowerSupply2() {
	let pcNumber = Math.randomInt(10, 99);
	let pcPower = Math.randomInt(10, 30) * 10;
	let energyPrice = Math.randomFloat(10, 99).toFixed(1);
	let daysPerYear = Math.randomInt(90, 330);
	let hoursPerDay = Math.randomInt(1, 24);
	let psuAPower = pcPower + Math.randomInt(5, 20) * 10;
	let psuBPower = pcPower + Math.randomInt(5, 20) * 10;
	let psuAPrice = Math.randomInt(30, 80);
	let psuBPrice = Math.randomInt(30, 80);
	let psuA1Efficiency = Math.randomFloat(50, 59).toFixed(1);
	let psuB1Efficiency = Math.randomFloat(50, 59).toFixed(1);
	let psuA2Efficiency = Math.randomFloat(60, 79).toFixed(1);
	let psuB2Efficiency = Math.randomFloat(60, 79).toFixed(1);
	let psuA3Efficiency = Math.randomFloat(80, 89).toFixed(1);
	let psuB3Efficiency = Math.randomFloat(80, 89).toFixed(1);
	let psuA4Efficiency = Math.randomFloat(90, 99).toFixed(1);
	let psuB4Efficiency = Math.randomFloat(90, 99).toFixed(1);
	let psuANoise = Math.randomFloat(15, 30).toFixed(1);
	let psuBNoise = Math.randomFloat(15, 30).toFixed(1);

	let actualEffA;
	let actualEffB;
	let effA = psuAPower / pcPower * 100;
	let effB = psuBPower / pcPower * 100;

	switch (true) {
		case (effA <= 20):
			actualEffA = psuA1Efficiency;
			break;
		case (effA <= 40):
			actualEffA = psuA2Efficiency;
			break;
		case (effA <= 60):
			actualEffA = psuA3Efficiency;
			break;
		default:
			actualEffA = psuA4Efficiency;
			break;
	}

	switch (true) {
		case (effB <= 20):
			actualEffB = psuB1Efficiency;
			break;
		case (effB <= 40):
			actualEffB = psuB2Efficiency;
			break;
		case (effB <= 60):
			actualEffB = psuB3Efficiency;
			break;
		default:
			actualEffB = psuB4Efficiency;
			break;
	}

	let author = "wbs-mw";
	let body = `
		<p>b) Es sollen ${pcNumber} neue Arbeitsplatzrechner beschafft werden. Sie sind für die Hardwareausstattung der Geräte zuständig und sollen</br>entscheiden, mit welchem der beiden zur Auswahl stehenden Netzteiltypen die Geräte ausgeliefert werden sollen.</p>
		<dl>
			<dt>Die Bauteile eines PCs benötigen</dt>
			<dd>${pcPower} Watt</dd>
			<dt>Der Strompreis liegt bei</dt>
			<dd>${energyPrice} Cent pro kWh</dd>
			<dt>Laufzeit pro Jahr</dt>
			<dd>${daysPerYear} Tage</dd>
			<dt>Laufzeit pro Tag</dt>
			<dd>${hoursPerDay} Stunden</dd>
		</dl>
		<table>
			<thead>
				<tr>
					<td></td>
					<td>Netzteiltyp A (${psuAPower} Watt)</td>
					<td>Netzteiltyp B (${psuBPower} Watt)</td>
				</tr>
			</thead>
			<tbody>
				<tr>
					<td>Preis</td>
					<td>${psuAPrice} EUR</td>
					<td>${psuBPrice} EUR</td>
				</tr>
				<tr>
					<td>10-20 % Last @ 230 V</td>
					<td>Wirkungsgrad: ${psuA1Efficiency} %</td>
					<td>Wirkungsgrad: ${psuB1Efficiency} %</td>
				</tr>
				<tr>
					<td>20-40 % Last @ 230 V</td>
					<td>Wirkungsgrad: ${psuA2Efficiency} %</td>
					<td>Wirkungsgrad: ${psuB2Efficiency} %</td>
				</tr>
				<tr>
					<td>40-60 % Last @ 230 V</td>
					<td>Wirkungsgrad: ${psuA3Efficiency} %</td>
					<td>Wirkungsgrad: ${psuB3Efficiency} %</td>
				</tr>
				<tr>
					<td>60-100 % Last @ 230 V</td>
					<td>Wirkungsgrad: ${psuA4Efficiency} %</td>
					<td>Wirkungsgrad: ${psuB4Efficiency} %</td>
				</tr>
				<tr>
					<td>Noise Level</td>
					<td>${psuANoise} dB(A)</td>
					<td>${psuBNoise} dB(A)</td>
				</tr>
				<tr>
					<td>Energiekosten pro Netzteil pro Jahr in EUR</td>
					<td><input> EUR</td>
					<td><input> EUR</td>
				</tr>
			</tbody>
		</table>
	`;

	let answers = [
		((pcPower / actualEffA * 100 / 1000) * (hoursPerDay * daysPerYear) * (energyPrice / 100)).toFixed(2),
		((pcPower / actualEffB * 100 / 1000) * (hoursPerDay * daysPerYear) * (energyPrice / 100)).toFixed(2),
	];

	return new Question(author, body, answers);
}