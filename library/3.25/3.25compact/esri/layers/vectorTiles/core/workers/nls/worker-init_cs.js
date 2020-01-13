define('esri/layers/vectorTiles/core/workers/nls/worker-init_cs',{
'dojo/cldr/nls/number':{"scientificFormat":"#E0","currencySpacing-afterCurrency-currencyMatch":"[:^S:]","infinity":"∞","superscriptingExponent":"×","list":";","percentSign":"%","minusSign":"-","currencySpacing-beforeCurrency-surroundingMatch":"[:digit:]","decimalFormat-short":"000 bil'.'","currencySpacing-afterCurrency-insertBetween":" ","nan":"NaN","plusSign":"+","currencySpacing-afterCurrency-surroundingMatch":"[:digit:]","currencySpacing-beforeCurrency-currencyMatch":"[:^S:]","currencyFormat":"#,##0.00 ¤","perMille":"‰","group":" ","percentFormat":"#,##0 %","decimalFormat-long":"000 bilionů","decimalFormat":"#,##0.###","decimal":",","currencySpacing-beforeCurrency-insertBetween":" ","exponential":"E","_localized":{}}
,
'dojo/cldr/nls/gregorian':{"dateFormatItem-Ehm":"E h:mm a","days-standAlone-short":["ne","po","út","st","čt","pá","so"],"months-format-narrow":["1","2","3","4","5","6","7","8","9","10","11","12"],"field-second-relative+0":"nyní","quarters-standAlone-narrow":["1","2","3","4"],"field-weekday":"Den v týdnu","dateFormatItem-yQQQ":"QQQ y","dateFormatItem-yMEd":"E d. M. y","field-wed-relative+0":"tuto středu","field-wed-relative+1":"příští středu","dateFormatItem-GyMMMEd":"E d. M. y G","dateFormatItem-MMMEd":"E d. M.","eraNarrow":["př.n.l.","n.l.","n. l."],"field-tue-relative+-1":"minulé úterý","days-format-short":["ne","po","út","st","čt","pá","so"],"dateTimeFormats-appendItem-Day-Of-Week":"{0} {1}","dateFormat-long":"d. MMMM y","field-fri-relative+-1":"minulý pátek","field-wed-relative+-1":"minulou středu","months-format-wide":["ledna","února","března","dubna","května","června","července","srpna","září","října","listopadu","prosince"],"dateTimeFormat-medium":"{1} {0}","dayPeriods-format-wide-pm":"odpoledne","dateFormat-full":"EEEE d. MMMM y","field-thu-relative+-1":"minulý čtvrtek","dateFormatItem-Md":"d. M.","dayPeriods-format-abbr-am":"AM","dateTimeFormats-appendItem-Second":"{0} ({2}: {1})","dayPeriods-format-wide-noon":"noon","dateFormatItem-yMd":"d. M. y","field-era":"Letopočet","dateFormatItem-yM":"M/y","months-standAlone-wide":["leden","únor","březen","duben","květen","červen","červenec","srpen","září","říjen","listopad","prosinec"],"timeFormat-short":"H:mm","quarters-format-wide":["1. čtvrtletí","2. čtvrtletí","3. čtvrtletí","4. čtvrtletí"],"dateFormatItem-yQQQQ":"QQQQ y","timeFormat-long":"H:mm:ss z","field-year":"Rok","dateFormatItem-yMMM":"LLLL y","dateTimeFormats-appendItem-Era":"{1} {0}","field-hour":"Hodina","months-format-abbr":["led","úno","bře","dub","kvě","čvn","čvc","srp","zář","říj","lis","pro"],"field-sat-relative+0":"tuto sobotu","field-sat-relative+1":"příští sobotu","timeFormat-full":"H:mm:ss zzzz","dateTimeFormats-appendItem-Week":"{0} ({2}: {1})","field-day-relative+0":"dnes","field-thu-relative+0":"tento čtvrtek","field-day-relative+1":"zítra","field-thu-relative+1":"příští čtvrtek","dateFormatItem-GyMMMd":"d. M. y G","dateFormatItem-H":"H","months-standAlone-abbr":["led","úno","bře","dub","kvě","čvn","čvc","srp","zář","říj","lis","pro"],"quarters-format-abbr":["Q1","Q2","Q3","Q4"],"quarters-standAlone-wide":["1. čtvrtletí","2. čtvrtletí","3. čtvrtletí","4. čtvrtletí"],"dateFormatItem-Gy":"y G","dateFormatItem-M":"L","days-standAlone-wide":["neděle","pondělí","úterý","středa","čtvrtek","pátek","sobota"],"dayPeriods-format-abbr-noon":"noon","timeFormat-medium":"H:mm:ss","field-sun-relative+0":"tuto neděli","dateFormatItem-Hm":"H:mm","field-sun-relative+1":"příští neděli","quarters-standAlone-abbr":["Q1","Q2","Q3","Q4"],"eraAbbr":["př. n. l.","n. l."],"field-minute":"Minuta","field-dayperiod":"dop./odp.","days-standAlone-abbr":["ne","po","út","st","čt","pá","so"],"dateFormatItem-d":"d.","dateFormatItem-ms":"mm:ss","quarters-format-narrow":["1","2","3","4"],"field-day-relative+-1":"včera","dateTimeFormat-long":"{1} {0}","dayPeriods-format-narrow-am":"dop.","dateFormatItem-h":"h a","dateFormatItem-MMMd":"d. M.","dateFormatItem-MEd":"E d. M.","dateTimeFormat-full":"{1} {0}","field-fri-relative+0":"tento pátek","field-fri-relative+1":"příští pátek","field-day":"Den","days-format-wide":["neděle","pondělí","úterý","středa","čtvrtek","pátek","sobota"],"field-zone":"Časové pásmo","months-standAlone-narrow":["1","2","3","4","5","6","7","8","9","10","11","12"],"dateFormatItem-y":"y","dateTimeFormats-appendItem-Day":"{0} ({2}: {1})","field-year-relative+-1":"minulý rok","field-month-relative+-1":"minulý měsíc","dateTimeFormats-appendItem-Year":"{1} {0}","dateFormatItem-hm":"h:mm a","dateTimeFormats-appendItem-Hour":"{0} ({2}: {1})","dayPeriods-format-abbr-pm":"PM","days-format-abbr":["ne","po","út","st","čt","pá","so"],"eraNames":["př. n. l.","n. l."],"dateFormatItem-yMMMd":"d. M. y","days-format-narrow":["N","P","Ú","S","Č","P","S"],"field-month":"Měsíc","days-standAlone-narrow":["N","P","Ú","S","Č","P","S"],"dateFormatItem-MMM":"LLL","field-tue-relative+0":"toto úterý","dateTimeFormats-appendItem-Quarter":"{0} ({2}: {1})","field-tue-relative+1":"příští úterý","dayPeriods-format-wide-am":"dopoledne","dateTimeFormats-appendItem-Month":"{0} ({2}: {1})","dateTimeFormats-appendItem-Minute":"{0} ({2}: {1})","dateFormatItem-EHm":"E H:mm","field-mon-relative+0":"toto pondělí","field-mon-relative+1":"příští pondělí","dateFormat-short":"dd.MM.yy","dateFormatItem-EHms":"E H:mm:ss","dateFormatItem-Ehms":"E h:mm:ss a","dayPeriods-format-narrow-noon":"n","field-second":"Sekunda","field-sat-relative+-1":"minulou sobotu","dateFormatItem-yMMMEd":"E d. M. y","field-sun-relative+-1":"minulou neděli","field-month-relative+0":"tento měsíc","field-month-relative+1":"příští měsíc","dateTimeFormats-appendItem-Timezone":"{0} {1}","dateFormatItem-Ed":"E d.","field-week":"Týden","dateFormat-medium":"d. M. y","field-week-relative+-1":"minulý týden","field-year-relative+0":"tento rok","field-year-relative+1":"příští rok","dayPeriods-format-narrow-pm":"odp.","dateTimeFormat-short":"{1} {0}","dateFormatItem-Hms":"H:mm:ss","dateFormatItem-hms":"h:mm:ss a","dateFormatItem-GyMMM":"LLLL y G","field-mon-relative+-1":"minulé pondělí","field-week-relative+0":"tento týden","field-week-relative+1":"příští týden","dateFormatItem-yMMMMd":"d. MMMM y","field-day-relative+2":"pozítří","dateFormatItem-MMMMd":"d. MMMM","dateFormatItem-GyMMMMd":"d. MMMM y G","field-day-relative+-2":"předevčírem","dateFormatItem-yMMMM":"LLLL y","dateFormatItem-MMMMEd":"E d. MMMM","dateFormatItem-yMMMMEd":"E d. MMMM y","dateFormatItem-GyMMMMEd":"E d. MMMM y G","_localized":{}}
,
'esri/layers/vectorTiles/nls/common':{"_localized":{}}
});