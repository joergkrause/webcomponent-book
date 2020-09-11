# Braucht deine App ein Frontend-Framework?

Wahrscheinlich hast du viel über Frontend-Frameworks gehört oder gelesen. Namen wie React, Vue und Angular geistern in Anleitungen herum und bestimmen Entwickler-Debatten. Ich kenne selbst viele Entwickler, die mich fragen, welches Framework sie benutzten sollen. Ich halte viele Workshops und Weiterbildungen zur Web-Entwicklung, lehre Entwickler Full-Stack, also Frontend und Backend, und dies meist mit JavaScript/TypeScript und C#/.NET Core. Manchmal haben die Teilnehmer Erfahrung im Bereich Desktop-Entwicklung. Manchmal haben Sie schon ein wenig Erfahrung im Web. Aber warum auch immer sie sich nun mit Web-Entwicklung beschäftigen, fast immer kommt zuerst dieselbe Frage: Welches Frontend-Framework? Eine ganze Industrie arbeitet an solchen Rahmenwerken und häufig drehen sich die Diskussionen um die Frage "dieses oder jenes", was ist das neueste, und was kommt als nächstes? Es gibt eine unglaubliche Anzahl Artikel die solche Frontend-Frameworks vergleichen, mit Titeln wie "Die besten 8 Frameworks im Jahre 2020" (ersetze die 8 durch jede beliebige Zahl und 2020 durch ein anderes Jahr - du wirst nahezu jede Kombination finden). Es sind Hunderte derartige Artikel. Nur sehr selten wird dagegen die Frage gestellt: "Brauche ich wirklich ein Framework"?

## Ein Blick zurück

Lasst mich zuerst einen kurzen Blick in die Geschichte der Frameworks werfen, um die Bedeutung dieser Frage zu verstehen. Am Anfang ga es nur eine handvoll Bibliotheken für Aufgaben, die häufig zu erledigen waren. Diese Geschichte begann mit der wohl erfolgreichsten und immer noch beliebten Bibliothek [jQuery](https://jquery.com/). Sie erschien im Jahre 2006 und bot ein paar sehr hilfreiche Funktionen. Eine Auswahl-Funktion ([Sizzle](https://github.com/jquery/sizzle/wiki)), die ursprünglich sogar ein eigenes Produkt war. Der Erfinder von jQuery, [John Resig](https://en.wikipedia.org/wiki/John_Resig) integrierte sie erste später nativ. Ein erstaunliches Animations-Modul zeigte durch (damals) beeindruckende Demos was die Bibliothek kann. Und sie bot eine Abstraktionsschicht für wichtige Browserfunktionen, beispielsweise Ajax, die die unterschiedlichen Implementierungen in den Browsern ausglichen. Das war notwendig, denn um diese Zeit tobte der [zweite Browser-Krieg](https://en.wikipedia.org/wiki/Browser_wars) und die Hersteller überboten sich mit inkompatiblen Erweiterungen. jQuery löste sehr viele Probleme udn viel mehr brauchte man nicht, um eine interaktive Website zu bauen.

Dann erschien, etwa um 2010 herum, eine neue Art der Applikationsarchitektur --die Single Page Application (SPA). Die traditionelle Arbeit mit JavaScript im Browser erforderte einen erheblichen Aufwand, um all die Funktionen einer SPA abzubilden. Viele kleinere Bibliotheken entstanden, die Teilaufgaben lösten. Meist brauchte man einen Router, der Komponenten dynamisch laden konnte, und einen Packer, der Bausteine in ein Paket zusammenführen konnte. Doch die Applikationen wurden größer, schnell und massiv. Das Zeitalter der Web-Anwendungen brach an. Sttt kleiner Seiten mit interaktiven Elementen wurden nun komplette Applikationen geschrieben. Schneller JavaScript-Laufzeiten und bessere Browser machten es möglich. Dadurch entstand der Bedarf nach einer besseren programmierseitigen Unterstützung. Die erste Antwort auf diesen Bedarf war AngularJS, das bereits 2010 erschien. Mit der Unterstützung durch Google und einem echten Bedarf wurde es vom Markt gut aufgenommen und es entstand schnelle eine große Community. Das erste globale fette Framework war entstanden. Statt direkt mit dem schwachen JavaScript zu arbeiten, wurden eine Menge Funktionen eingeführt, die in jeder Anwendung benötigt wurden. Die Antwort von Facebook war React, nur wenige Zeit später. Eine der herausragenden Merkmale war der Schatten-DOM, eine virtuelle Abbildung des Document Object Model im Speicher statt im Browser. Änderungen am DOM führen immer zum sofortigen Rendern des sichtbaren Teils der Anwendung. Das führt bei sorgloser Programmierung dazu, dass der Browser wieder und wieder rendert, wenn die Seite aufgebaut wird. Wenn du auf dem virtuellen Schatten-DOM arbeitest, wird dagegen mit einfachen JavaScript-Objekten hantiert. Später, wenn alle Schritte erledigt sind, wird ein ganzes HTML-Fragment ausgetauscht und genau einmal gerendert. Das bringt eine höhere Geschwindigkeit, einfachere Entwicklung und kürzere Lebenszyklen der Software. Was für eine wundervolle Welt. Aber Facebook ist eine unglaublich komplexe Applikation. Der Bedarf an einer professionellen Architektur war enorm. Deshalb entwickelte Facebook noch etwas anderes -- die Flux -Architektur. Der Begriff "The single source of truth" (etwa "es gibt nur eine Wahrheit") wurde geboren und eine neue Bibliothek entstand, Redux genannt (Das ist natürlich nur eine von vielen, aber wohl eine der erfolgreichsten).

Aber dann entkoppelte sich der Markt ein wenig. Die Entwickler verstanden schnell, dass der Weg wie Angular funktioniert oder wie man mit React arbeitet nur ein möglicher Stil war. Deshalb starteten andere mit anderen Architekturen, anderen Wegen zum Erstellen, Übersetzen oder Verpacken. Weitere Frameworks entstanden, eines nach dem anderen. Und eine Flut von Vergleichsartikeln brach über uns herein.

## Die nächste Welle

Was viele Entwickler dabei verpasst haben, ist die Tatsache, dass der zweite Browser-Krieg im Jahr 2017 endete. Chrome hat gewonnen -- ob man das mag oder nicht. Aber darum geht es nicht. Es geht darum, dass der Browser-Krieg die Anbieter dazu bewegte, eine erstaunliche Anzahl an Funktionen und Adaptionen der Standards zu produzieren. Es wurde hart um Marktanteile gekämpft. Das führte auch zu einem signifikanten Wachstum der nativen Programmierschnittstellen (API) unter dem Dach von HTML 5, der Beschleunigung der Entwicklungszyklen von ECMAScript (JavaScript) und der Erweiterungen von CSS. Diese drei Bausteine (HTML, JavaScript, CSS) sind die Schlüsselzutaten moderner Browser-Applikationen. Sie sind mehrere Stufen weiter entwickelt als 2006. Und sie sind auch weiter als der Stand im Jahr 2010.

Aber nun schreiben wir das Jahr 2020. Das ist ein sehr langer Zeitraum in der Programmierwelt. Und deshalb ist es an der Zeit, die Frage erneut zu stellen, aber vielleicht ein bisschen anders: "Kannst du dir vorstellen, dass die Browser-API ein Framework ersetzen kann"?

## Drei Erkenntnisse

Lass mich dies Schritt für Schritt erläutern.

Die erste Erkenntnis ist, dass die famose Sizzle-Bibliothek tatsächlich fast komplett durch eine native API ersetzt werden kann. Fast, weil es einige exotische Funktionen gibt, die konsequenterweise nicht von der API angeboten werden. Der Vorteil damit gleich eine ganze Bibliothek einzusparen, ist überragend. Die verschiedene Ajax-APIs existieren nicht mehr, alle Browser verstehen eine einheitliche API. Und CSS 3 wurde mit einer beeindruckenden Anzahl amn Animationen und Übergängen ausgestattet. Niemand braucht heute mehr jQuery.

Die zweite Erkenntnis betrifft die bereits erwähnten fetten Frameworks. Der Schatten-DOM, den React uns gab, fand seine Widergeburt in Angular und Vue und Svelte und...Heutzutage ist er auch in der nativen API verfügbar. Das Komponentenmodell ist ein fundamentales Entwurfsmuster nahezu aller Rahmenwerke. Es ist als "Web Components" nativ verfügbar. Es passiert hier dasselbe wie mit jQuery. Die Browser-Hersteller versuchen mit der Entwicklung Schritt zu halten und bieten moderne, schnelle API-Funktionen. Die sind nicht immer perfekt und machen Methodensignatur sieht komisch aus, aber der wahre Grund für manche komplexe API ist, dass sie alle Szenarien unterstützen muss, während sich Bibliotheken oft spezialisieren. Nicht jede App hat 2 Milliarden Benutzer, nicht wahr? Das Ergebnis dieser Entwicklung lässt sich leicht zusammefassen. Niemand braucht mehr ein fettes Framework iM Jahr 2020.

Die dritte Erkenntnis ist etwas schwerer zu fassen. React, Angular und ihre Freunde bieten ja nicht nur Komponenten und Verpackung. Zu den typischen Funktionen gehört eine clevere Datenbindung. Dies ist eine Funktion, die ich persönlich wirklich liebe. Auch die integrierte Formularvalidierung in Angular ist oft hilfreich. Da gibt es scheinbar keine direkt nutzbare API. Oder doch?

## Verstehe deine Welt

Tatsächlich bieten Browser einige APIs-Funktionen, die sich gut eignen, um Bindungsverhalten oder ähnliche Automatismen zuerstellen. Herausragend sollten an dieser Stelle `Proxy`-Klassen und der `MutationObserver` genannt werden. Proxies überwachen Objekte und reagieren auf Änderungen. Damit lässt sich beim Eintreffen eines Objekts vom Server (native API: `fetch`) der Schatten-DOM (native API: web components) neu erstellen. Der `MutationObserver` überwacht dagegen den DOM (virtuell oder nicht) und zeigt an, dass sich eine Änderung ergeben hat. Alles was ein Framework wie Angular hier bietet, ist eine smarte Templatesprache, die eine syntaktische Vereinfachung darstellt. Aber zu welchem Preis?

Alle Frameworks haben aufgrund ihrer Komplexität ein Problem. Um überhaupt mittelfristig wartbar und weiterentwickelbar zu sein, müssen sie sich von der nativen API entkoppeln. Das führt regelmäßig zur Entwicklung einer Abstraktionsschicht. Das ist in React gut zu sehen, wo es jedes HTML-Element auch noch als JavaScript-Klasse gibt. Das sieht man bei Angular, weo ein komplettes System aus Compiler und Template-Laufzeit existiert. Aus Sicht der Entwickler ist das logisch und sinnvoll. Als Anwendungsentwickler sehe ich hunderte bis tausende Kilobytes an Bibliothekscode, den ich mit ausliefern muss. Ich sehe komplexe Werkzeuge, Hilfsprogramme und Erweiterungen. Viel Aufwand für wenig Nutzen heutzutage.

Nun wird der eine oder andere React-Fan sich möglicherweise mit JSX angefreundet haben. Man muss es nicht mögen, aber es ist schon ausgesprochen clever, HTML direkt in JavaScript einzubinden. Will ich so meine Komponenten erstellen, muss ich dann React nehmen? Tatsächlich ist JSX ein Feature, dass recht universell ist. Es ist am Besten in React implementiert (die haben es auch erfunden).

~~~js
class App extends React.Component {
  render() {
    return (
      <div>
        <p>Header</p>
        <p>Content</p>
        <p>Footer</p>
      </div>
    );
  }
}
~~~

Übersetzen kann man es aber auch mit Babel, TypeScript und vermutlich einer handvoll weiteren Werkzeugen. JSX ohne React ist kein Problem und wer es mag soll es haben. Klar, da sind ein paar Zeilen Code notwendig, um es zum Laufen zu bringen. Aber es ist viel, sehr viel weniger als die ganze React-Bibliothek.

## Die Geburt der Thin Libraries

Thin Libraries (schmale Bibliotheken) hatten wir schon mal -- die erste und bekannteste war jQuery. Der Grund ist einfach. Viele Programmieraufgaben sind wiederholender Natur. Solange wir mit allgemeinen Programmiersprachen arbeiten, also solche die nicht auf einen bestimmten Zweck zu geschnitten sind, müssen wir teilweise Infrastrukturcode schreiben. JavaScript ist eine solche universelle Sprache. Die Schlüsselwörter, die wir benutzen, heißen `class` oder `function`. Aber was ist eine Klasse, was ist eine Funktion?

Sprachen, die einem bestimmten Zweck dienen, sind domänenspezifisch. Wer eine Komponente erstellt, würde dort eher `component` schreiben. Wie viel Code könnte man sich sparen, wenn man eine spezialisierte Sprache hat? Thin Libraries nehmen diese absehbare Entwicklung voraus, indem sie für einige typische Funktionen Hilfsmittel bereitstellen, die den Aufwand Code zu schreiben minimieren. Für die Aufgaben, die wir immer brauchen, stellen sie Funktionen bereit, kleine und schnelle Hilfen. Um den Begriff etwas fassbarer zu machen, würde ich heute die Grenze bei 50 KByte ziehen (komprimierter Skriptcode bei der Auslieferung). Die maximale Zeit zum Laden, Parsen und starten sollten nicht mehr als 50 ms sein. 50 ms fühlen sich für den Benutzer noch wie 0 an.

Das ist die 50+50 Regel. 50KByte Bibliothekscode, 50 ms Bereitstellungszeit.

## Not Yet Another Framework

Für Web Components habe ich eine solche Bibliothek geschrieben und in drei Teil aufgeteilt, um ganz sicher diese Grenze nicht zu überschreiten.

* Basisbibliothek und JSX: 36 KB --> 11 KB zipped
* Bindung und Validierung:  20 KB --> 5 KB zipped
* Flux-Store:   5 KB -->  2 KB zipped

Das was ausgeliefert wird, ist nun tatsächlich nur 34 KB groß. Und es enthält alles, was man für eine Single Page App braucht. Es enthält eine Template-Laufzeit basierend auf JSX und all die netten Funktionen, die die Komponentenentwicklung angenehm machen. Entwickelt in und für TypeScript, damit du auch jeden beliebigen Editor benutzten kannst.

Aber wie geht das? Ich habe einfach die drei Erkenntnisse vom Anfang dieses Artikels verinnerlicht. Was die native API eines modernen Browsers kann, wird benutzt. Keine Abstraktionsschicht, keine Funktionen, die nur mit erheblichen Aufwand nachgebildet werden müssten. Modern heißt auch, dass ältere Browser nicht einsetzbar sind, auch nicht mit Polyfills (es gibt einiges in ES2018, dass sich nicht nachbilden lässt). Was die native API hergibt, wird nicht ersetzt. Es kann einem gestandenen Web-Entwickler heute zugemutet werden, diese API zu lernen. Man muss sich nicht in eine weitere Syntax einarbeiten, nur um einen regelmäßigen Besuch auf MDN (Mozilla Developer Network) zu vermeiden. Wer sich für das Ergebnis interessiert, der findet alls sorgfältig dokumentiert und gut beschrieben via [Github](https://github.com/joergkrause/nyaf) oder direkt auf [npm](https://www.npmjs.com/package/@nyaf/lib). Der Name **@nyaf** seht übrigens für "Not Yet Another Framework", denn das wollen wir nun wirklich nicht mehr haben, nicht wahr?