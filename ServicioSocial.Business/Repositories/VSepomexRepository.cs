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
    public class VSepomexRepository : IVSepomexRepository
    {
        private readonly AppSettings _settings;
        private static string _tableName = "VSepomex";
        public VSepomexRepository(IOptions<AppSettings> settings) 
        {
            _settings = settings.Value;
        }
        public async Task<IEnumerable<VSepomex>> GetColoniasFromCP(string cp)
        {
            string sql = $"SELECT * FROM {_tableName} WHERE CP='{cp}'";
            using (var connection = new SqlConnection(_settings.Connection)) {
                return await connection.QueryAsync<VSepomex>(sql);
            }
        }
    }
}
