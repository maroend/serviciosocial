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
    public class IntegrantesPatronatoRepository : GenericRepository<IntegrantesPatronato>,IIntegrantesPatronatoRepository
    {
        private readonly AppSettings _settings;
        private static string _tableName = "IntegrantesPatronato";
        public IntegrantesPatronatoRepository(IOptions<AppSettings> settings) : base(settings, _tableName)
        {
            _settings = settings.Value;
        }

        public async Task<IEnumerable<IntegrantesPatronato>> GetLisByIdOrganizacion(long idOrganizacion)
        {
            string sql = $"SELECT * FROM {_tableName} WHERE IdOrganizacion = {idOrganizacion}";
            using (var connection = new SqlConnection(_settings.Connection)) {
                return await connection.QueryAsync<IntegrantesPatronato>(sql);
            }
        }
    }
}
