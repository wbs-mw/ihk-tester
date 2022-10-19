questionList.push(mw_ihk_ap1_20220921_nr2);

function mw_ihk_ap1_20220921_nr2() {
	let scanners = Math.randomInt(1, 4);
	let hoursPerDay = Math.randomInt(2, 24);
	let scanAreaWidth = Math.randomFloat(20, 70).toFixed(1);
	let scanAreaHeight = Math.randomFloat(20, 70).toFixed(1);
	let productionSpeed = scanAreaHeight;
	let workWidth = scanAreaWidth * 10 * scanners;
	let dpiWidth = Math.randomInt(30, 60) * 10;
	let dpiHeight = dpiWidth;
	let bitDepth = Math.randomInt(1, 4) * 8;
	let smallHdds = Math.randomInt(2, 16);
	let largeHdds = Math.randomInt(1, smallHdds);
	let largeHddSize = Math.randomInt(2, 32);
	let smallHddSize = Math.randomInt(1, largeHddSize-1);
	
	let author = "wbs-mw";
	let body = `
		<p>Die Package AG plant die Anschaffung einer kleinen Fertigungslinie für Karton, welche mit einer Arbeitsbreite von <b>${workWidth} mm</b> und</br>einer Produktionsgeschwindigkeit von <b>${productionSpeed} m/min</b> Karton auf Rollen produziert. Die Anlage soll ${hoursPerDay} Stunden pro Tag produktiv sein.</p>
		<p>Karton wird zum Teil aus Altpapier hergestellt, Unreinheiten wirken sich auf die Qualität des Kartons aus. Zur Qualitätssicherung</br>wird die erzeugte Kartonbahn fortlaufend durch eine Kamera gescannt. Die entstandenen Bilder werden ausgewertet und an-</br>schließend gespeichert. Bei erkannten Verfärbungen der Oberfläche oder Einschlüssen im Karton werden die aktuellen Rollen als</br>mindere Qualität eingestuft.</p>
		<table>
			<tbody>
				<tr>
					<td>Erfasste Scanfläche:</td>
					<td><b>${scanAreaWidth} cm</b> breit x <b>${scanAreaHeight} cm</b> lang</td>
				</tr>
				<tr>
					<td>Auflösung:</td>
					<td>${dpiWidth} dpi x ${dpiHeight} dpi</td>
				</tr>
				<tr>
					<td>Farbtiefe:</td>
					<td>${bitDepth} Bit</td>
				</tr>
				<tr>
					<td>1 Inch:</td>
					<td>2,54 cm</td>
				</tr>
			</tbody>
		</table>
		<p>a) Ermitteln Sie zunächst die Zahl der Scans/Aufnahmen pro Tag. Der Rechenweg ist anzugeben.</p>
		<textarea></textarea>
		<p>b) Die Daten der Scans werden ein Tag für Auswertungen zur Qualitätskontrolle gespeichert.</p>
		<p>ba) Ermitteln Sie das zu speichernde Datenvolumen in MiB pro Scan.</p>
		<p>Der Rechenweg ist anzugeben.</p>
		<textarea></textarea>
		<p>bb) Ermitteln Sie anschließend das gesamte zu speichernde Datenvolumen pro Tag in TiB.</p>
		<p>Runden Sie das Ergebnis auf volle TiB auf.</p>
		<p>Der Rechenweg ist anzugeben.</p>
		<s><p>Hinweis: Sollten Sie die Aufgabe a) oder die Teilaufgabe ba) nicht gelöst haben, gehen Sie von <b>100.000 Scans/Aufnah-</br>men</b> pro Tag und <b>70 MiB</b> Datenvolumen pro Scan aus.</p></s>
		<textarea></textarea>
		<p>c) In Abstimmung mit der IT-Leitung beschließen Sie, ein redundantes Speichersystem einzurichten. Dazu sind folgende Kompo-</br>nenten verfügbar:</p>
		<ul>
			<li>${largeHdds} Festplatten (je ${largeHddSize} TB Speicherkapazität)</li>
			<li>${smallHdds} Festplatten (je ${smallHddSize} TB Speicherkapazität)</li>
			<li>PCI RAID-Hostadapter</li>
		</ul>
		<p>ca) Mit allen vorhandenen Festplatten soll eine fehlertolerante RAID 5-Konfiguration erstellt werden, welche die größtmög-</br>liche Nettospeicherkapazität  biete.</p>
		<p>Berechnen Sie die maximale Nettospeicherkapazität in TB. Der Rechenweg ist anzugeben.</p>
		<p>RAID-Level</p>
		<textarea></textarea>
		<p>Nettospeicherkapazität</p>
		<textarea></textarea>
		<p>cb) Für einen Vergleich soll auch die Speicherkapazität berechnet werden, wenn man die gegebenen Festplatten als JBOD</br>(Zusammenfassung aller festplatten zu einem logischen Volume) nutzt.</p>
		<p>Ermitteln Sie die erreichbare Speicherkapazität in TB. Der Rechenweg ist anzugeben.</p>
		<p>Speicherkapazität</p>
		<textarea></textarea>
		<s><p>cc) Beschreiben Sie zwei Vorteile, die ein Laufwerksverbund als JBOD gegenüber einem RAID 0 bietet.</p>
		<textarea disabled></textarea>
		<p>Die im Netzwerk der Hauptverwaltung eingesetzten NAS-Speichersysteme sollen durch ein SAN (Storage Area Network) abge-</br>löst werden.</p>
		<p>Nennen Sie drei Vorteile, die den Einsatz begründen.</p>
		<textarea disabled></textarea>
		<p>e) Für die Kennzeichnung der produzierten Kartonrollen durch einen maschinenlesbaren Aufkleber schlägt die Geschäftsleitung</br>die Verwendung von Barcode, QR-Code oder RFID-Chips vor.</p>
		<p>Stellen Sie jeweils einen Vor- und Nachteil der Kennzeichnung mit QR-Code bzw. RFID-Chips in folgender Tabelle gegenüber.</p>
		<textarea disabled></textarea></s>
	`;
	
	let scansPerDay = (scanners * 100 * 60 * hoursPerDay).toFixed(0);
	let pixelsPerScan = Math.round((scanAreaWidth / 2.54 * dpiWidth) * (scanAreaHeight / 2.54 * dpiHeight));
	let bitsPerScan = pixelsPerScan * bitDepth;
	let bytesPerScan = bitsPerScan / 8;
	let kibPerScan = bytesPerScan / 1024;
	let mibPerScan = kibPerScan / 1024;
	let mibPerScanPerDay = mibPerScan * scansPerDay;
	let gibPerScanPerDay = mibPerScanPerDay / 1024;
	let tibPerScanPerDay = gibPerScanPerDay / 1024;
	
	let answer = [
		[new Answer(scansPerDay, "", 4)],
		[
			new Answer(pixelsPerScan, "Pixel", 1),
			new Answer(bitsPerScan, "Bit", 1),
			new Answer(bytesPerScan, "Byte", 1),
			new Answer(kibPerScan, "KiB", 0.5),
			new Answer(mibPerScan, "MiB", 0.5),
		],
		[
			new Answer(mibPerScanPerDay, "MiB", 0.5),
			new Answer(gibPerScanPerDay, "GiB", 0.5),
			new Answer(tibPerScanPerDay, "TiB", 0.5),	
			new Answer(Math.ceil(tibPerScanPerDay), "TiB", 0.5),
		],
		[new Answer(5, "", 0)],
		[new Answer(((largeHdds + smallHdds) - 1) * smallHddSize, "TB", 2)],
		[new Answer(largeHdds * largeHddSize + smallHdds * smallHddSize, "TB", 2)],
	];
	
	return new Question(author, body, answer);
}