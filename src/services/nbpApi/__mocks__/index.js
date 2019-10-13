
/** 
 * @author Zemin W.
 * @description define NBP api mocked functions for jest testing
 * @lastModified 2019.10.12
 * */

export const TABLE_FORMAT = {A:'A',B:'B',C:'C'}

export  const getCurrencyList = (table_format,callback) =>{
    var json_str = "[]"

    switch(table_format){
        case TABLE_FORMAT.A:
            json_str = '[{"table":"A","no":"198/A/NBP/2019","effectiveDate":"2019-10-11","rates":[{"currency":"bat (Tajlandia)","code":"THB","mid":0.1289},{"currency":"dolar amerykański","code":"USD","mid":3.9145},{"currency":"dolar australijski","code":"AUD","mid":2.6589},{"currency":"dolar Hongkongu","code":"HKD","mid":0.4993},{"currency":"dolar kanadyjski","code":"CAD","mid":2.9487},{"currency":"dolar nowozelandzki","code":"NZD","mid":2.4808},{"currency":"dolar singapurski","code":"SGD","mid":2.8487},{"currency":"euro","code":"EUR","mid":4.3097},{"currency":"forint (Węgry)","code":"HUF","mid":0.012986},{"currency":"frank szwajcarski","code":"CHF","mid":3.9192},{"currency":"funt szterling","code":"GBP","mid":4.8929},{"currency":"hrywna (Ukraina)","code":"UAH","mid":0.1592},{"currency":"jen (Japonia)","code":"JPY","mid":0.036246},{"currency":"korona czeska","code":"CZK","mid":0.1668},{"currency":"korona duńska","code":"DKK","mid":0.5770},{"currency":"korona islandzka","code":"ISK","mid":0.031298},{"currency":"korona norweska","code":"NOK","mid":0.4299},{"currency":"korona szwedzka","code":"SEK","mid":0.3985},{"currency":"kuna (Chorwacja)","code":"HRK","mid":0.5803},{"currency":"lej rumuński","code":"RON","mid":0.9055},{"currency":"lew (Bułgaria)","code":"BGN","mid":2.2035},{"currency":"lira turecka","code":"TRY","mid":0.6695},{"currency":"nowy izraelski szekel","code":"ILS","mid":1.1151},{"currency":"peso chilijskie","code":"CLP","mid":0.005444},{"currency":"peso filipińskie","code":"PHP","mid":0.0759},{"currency":"peso meksykańskie","code":"MXN","mid":0.2016},{"currency":"rand (Republika Południowej Afryki)","code":"ZAR","mid":0.2622},{"currency":"real (Brazylia)","code":"BRL","mid":0.9524},{"currency":"ringgit (Malezja)","code":"MYR","mid":0.9348},{"currency":"rubel rosyjski","code":"RUB","mid":0.0610},{"currency":"rupia indonezyjska","code":"IDR","mid":0.00027708},{"currency":"rupia indyjska","code":"INR","mid":0.055147},{"currency":"won południowokoreański","code":"KRW","mid":0.003304},{"currency":"yuan renminbi (Chiny)","code":"CNY","mid":0.5514},{"currency":"SDR (MFW)","code":"XDR","mid":5.3444}]}]'
            return callback(JSON.parse(json_str))
            
        case TABLE_FORMAT.B:
            json_str = '[{"table":"B","no":"041/B/NBP/2019","effectiveDate":"2019-10-09","rates":[{"currency":"afgani (Afganistan)","code":"AFN","mid":0.050396},{"currency":"ariary (Madagaskar)","code":"MGA","mid":0.001057},{"currency":"balboa (Panama)","code":"PAB","mid":3.9382},{"currency":"birr etiopski","code":"ETB","mid":0.1333},{"currency":"boliwar soberano (Wenezuela)","code":"VES","mid":0.000201},{"currency":"boliwiano (Boliwia)","code":"BOB","mid":0.5698},{"currency":"colon kostarykański","code":"CRC","mid":0.006774},{"currency":"colon salwadorski","code":"SVC","mid":0.4501},{"currency":"cordoba oro (Nikaragua)","code":"NIO","mid":0.1174},{"currency":"dalasi (Gambia)","code":"GMD","mid":0.0767},{"currency":"denar (Macedonia)","code":"MKD","mid":0.070348},{"currency":"dinar algierski","code":"DZD","mid":0.032718},{"currency":"dinar bahrajski","code":"BHD","mid":10.4372},{"currency":"dinar iracki","code":"IQD","mid":0.003301},{"currency":"dinar jordański","code":"JOD","mid":5.5572},{"currency":"dinar kuwejcki","code":"KWD","mid":12.9473},{"currency":"dinar libijski","code":"LYD","mid":2.7865},{"currency":"dinar serbski","code":"RSD","mid":0.0368},{"currency":"dinar tunezyjski","code":"TND","mid":1.3811},{"currency":"dirham marokański","code":"MAD","mid":0.4063},{"currency":"dirham ZEA (Zjednoczone Emiraty Arabskie)","code":"AED","mid":1.0725},{"currency":"dobra (Wyspy Świętego Tomasza i Książęca)","code":"STN","mid":0.1740},{"currency":"dolar bahamski","code":"BSD","mid":3.9382},{"currency":"dolar barbadoski","code":"BBD","mid":1.9515},{"currency":"dolar belizeński","code":"BZD","mid":1.9548},{"currency":"dolar brunejski","code":"BND","mid":2.8535},{"currency":"dolar Fidżi","code":"FJD","mid":1.7883},{"currency":"dolar gujański","code":"GYD","mid":0.01889},{"currency":"dolar jamajski","code":"JMD","mid":0.0292},{"currency":"dolar liberyjski","code":"LRD","mid":0.0186},{"currency":"dolar namibijski","code":"NAD","mid":0.2589},{"currency":"dolar surinamski","code":"SRD","mid":0.5271},{"currency":"dolar Trynidadu i Tobago","code":"TTD","mid":0.5815},{"currency":"dolar wschodniokaraibski","code":"XCD","mid":1.4540},{"currency":"dolar Wysp Salomona","code":"SBD","mid":0.4836},{"currency":"dong (Wietnam)","code":"VND","mid":0.0001698},{"currency":"dram (Armenia)","code":"AMD","mid":0.008263},{"currency":"escudo Zielonego Przylądka","code":"CVE","mid":0.0388},{"currency":"florin arubański","code":"AWG","mid":2.1770},{"currency":"frank burundyjski","code":"BIF","mid":0.002131},{"currency":"frank CFA BCEAO","code":"XOF","mid":0.006562},{"currency":"frank CFA BEAC","code":"XAF","mid":0.006539},{"currency":"frank CFP","code":"XPF","mid":0.036198},{"currency":"frank Dżibuti","code":"DJF","mid":0.022134},{"currency":"frank gwinejski","code":"GNF","mid":0.000426},{"currency":"frank Komorów","code":"KMF","mid":0.008788},{"currency":"frank kongijski (Dem. Republika Konga)","code":"CDF","mid":0.00237},{"currency":"frank rwandyjski","code":"RWF","mid":0.004257},{"currency":"funt egipski","code":"EGP","mid":0.2423},{"currency":"funt gibraltarski","code":"GIP","mid":4.8208},{"currency":"funt libański","code":"LBP","mid":0.002606},{"currency":"funt południowosudański","code":"SSP","mid":0.024836},{"currency":"funt sudański","code":"SDG","mid":0.0873},{"currency":"funt syryjski","code":"SYP","mid":0.0090},{"currency":"Ghana cedi","code":"GHS","mid":0.7280},{"currency":"gourde (Haiti)","code":"HTG","mid":0.0409},{"currency":"guarani (Paragwaj)","code":"PYG","mid":0.000616},{"currency":"gulden Antyli Holenderskich","code":"ANG","mid":2.2452},{"currency":"kina (Papua-Nowa Gwinea)","code":"PGK","mid":1.1577},{"currency":"kip (Laos)","code":"LAK","mid":0.000447},{"currency":"kwacha malawijska","code":"MWK","mid":0.005377},{"currency":"kwacha zambijska","code":"ZMW","mid":0.2995},{"currency":"kwanza (Angola)","code":"AOA","mid":0.0104},{"currency":"kyat (Myanmar, Birma)","code":"MMK","mid":0.002572},{"currency":"lari (Gruzja)","code":"GEL","mid":1.3304},{"currency":"lej Mołdawii","code":"MDL","mid":0.2237},{"currency":"lek (Albania)","code":"ALL","mid":0.035226},{"currency":"lempira (Honduras)","code":"HNL","mid":0.1603},{"currency":"leone (Sierra Leone)","code":"SLL","mid":0.000414},{"currency":"lilangeni (Eswatini)","code":"SZL","mid":0.2589},{"currency":"loti (Lesotho)","code":"LSL","mid":0.2589},{"currency":"manat azerbejdżański","code":"AZN","mid":2.3226},{"currency":"metical (Mozambik)","code":"MZN","mid":0.0638},{"currency":"naira (Nigeria)","code":"NGN","mid":0.012825},{"currency":"nakfa (Erytrea)","code":"ERN","mid":0.2614},{"currency":"nowy dolar tajwański","code":"TWD","mid":0.1279},{"currency":"nowy manat (Turkmenistan)","code":"TMT","mid":1.1280},{"currency":"ouguiya (Mauretania)","code":"MRU","mid":0.1054},{"currency":"pa\'anga (Tonga)","code":"TOP","mid":1.6997},{"currency":"pataca (Makau)","code":"MOP","mid":0.4875},{"currency":"peso argentyńskie","code":"ARS","mid":0.0681},{"currency":"peso dominikańskie","code":"DOP","mid":0.0752},{"currency":"peso kolumbijskie","code":"COP","mid":0.001141},{"currency":"peso kubańskie","code":"CUP","mid":3.9382},{"currency":"peso urugwajskie","code":"UYU","mid":0.1058},{"currency":"pula (Botswana)","code":"BWP","mid":0.3558},{"currency":"quetzal (Gwatemala)","code":"GTQ","mid":0.5068},{"currency":"rial irański","code":"IRR","mid":0.000094},{"currency":"rial jemeński","code":"YER","mid":0.015802},{"currency":"rial katarski","code":"QAR","mid":1.0781},{"currency":"rial omański","code":"OMR","mid":10.2517},{"currency":"rial saudyjski","code":"SAR","mid":1.0512},{"currency":"riel (Kambodża)","code":"KHR","mid":0.000963},{"currency":"rubel białoruski","code":"BYN","mid":1.9028},{"currency":"rupia lankijska","code":"LKR","mid":0.021833},{"currency":"rupia (Malediwy)","code":"MVR","mid":0.2549},{"currency":"rupia Mauritiusu","code":"MUR","mid":0.1078},{"currency":"rupia nepalska","code":"NPR","mid":0.034628},{"currency":"rupia pakistańska","code":"PKR","mid":0.0251},{"currency":"rupia seszelska","code":"SCR","mid":0.2876},{"currency":"sol (Peru)","code":"PEN","mid":1.1644},{"currency":"som (Kirgistan)","code":"KGS","mid":0.0563},{"currency":"somoni (Tadżykistan)","code":"TJS","mid":0.4066},{"currency":"sum (Uzbekistan)","code":"UZS","mid":0.000419},{"currency":"szyling kenijski","code":"KES","mid":0.03796},{"currency":"szyling somalijski","code":"SOS","mid":0.006811},{"currency":"szyling tanzański","code":"TZS","mid":0.001714},{"currency":"szyling ugandyjski","code":"UGX","mid":0.001067},{"currency":"taka (Bangladesz)","code":"BDT","mid":0.046631},{"currency":"tala (Samoa)","code":"WST","mid":1.4663},{"currency":"tenge (Kazachstan)","code":"KZT","mid":0.010095},{"currency":"tugrik (Mongolia)","code":"MNT","mid":0.001483},{"currency":"vatu (Vanuatu)","code":"VUV","mid":0.033179},{"currency":"wymienialna marka (Bośnia i Hercegowina)","code":"BAM","mid":2.2117}]}]'
            return callback(JSON.parse(json_str))
            
        default:
            throw "Invalid parameters"
    }
}

export const getCurrencyDetail = (table_format, code, callback) => {
    var json_str = "[]"

    switch(table_format){
        case TABLE_FORMAT.A:
            json_str = '{"table":"B","currency":"afgani (Afganistan)","code":"AFN","rates":[{"no":"041/B/NBP/2019","effectiveDate":"2019-10-09","mid":0.050396}]}'
            return callback(JSON.parse(json_str)) 
            
        case TABLE_FORMAT.B:
            json_str = '{"table":"A","currency":"dolar amerykański","code":"USD","rates":[{"no":"198/A/NBP/2019","effectiveDate":"2019-10-11","mid":3.9145}]}'
            return callback(JSON.parse(json_str))
            
        default:
            throw "Invalid parameters"
    }
}


