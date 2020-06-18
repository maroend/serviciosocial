using System;
namespace ServicioSocial.Business.Helpers
{
    public class AppSettings
    {
        public AppSettings()
        {
        }
        public string Connection { get; set; }
        public string Secret { get; set; }
        public string Issuer { get; set; }
        public int ExpirationTime { get; set; }
    }
}
