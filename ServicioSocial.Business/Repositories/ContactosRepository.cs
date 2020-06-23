using Dapper;
using Microsoft.Extensions.Options;
using ServicioSocial.Business.Generic;
using ServicioSocial.Business.Helpers;
using ServicioSocial.Business.Models;
using ServicioSocial.Business.Repositories.Interfaces;
using System;
using System.Collections.Generic;
using System.Data.SqlClient;
using System.Text;
using System.Threading.Tasks;

namespace ServicioSocial.Business.Repositories
{
    public class ContactosRepository : GenericRepository<Contactos>,IContactosRepository
    {
        private readonly AppSettings _settings;
        private static string _tableName = "Contactos";
        public ContactosRepository(IOptions<AppSettings> settings) : base(settings, _tableName)
        {
            _settings = settings.Value;
        }

        public async Task<IEnumerable<Contactos>> GetListByIdOrganizacion(long idOrganizacion)
        {

            string query = $"SELECT * FROM {_tableName} WHERE IdOrganizacion = '{idOrganizacion}'";
            using (var connection = new SqlConnection(_settings.Connection))
            {
                var row = await connection.QueryAsync<Contactos>(query);
                return row;
            }
        }
    }
}
