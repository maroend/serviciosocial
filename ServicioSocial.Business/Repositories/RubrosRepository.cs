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
    public class RubrosRepository:GenericRepository<Rubros>,IRubrosRepository
    {
        private readonly AppSettings _settings;
        private static string _tableName = "Rubros";
        public RubrosRepository(IOptions<AppSettings> settings) : base(settings, _tableName)
        {
            _settings = settings.Value;
        }

        public async Task<IEnumerable<Rubros>> GetListByIdOrganizacion(int idOrganizacion)
        {
            string sql = $"SELECT * FROM {_tableName} WHERE IdOrganizacion = {idOrganizacion}";
            using (var connection = new SqlConnection(_settings.Connection)) {
                return await connection.QueryAsync<Rubros>(sql);
            }
        }
    }
}
