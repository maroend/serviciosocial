using System;
using System.Data.SqlClient;
using System.Linq;
using System.Threading.Tasks;
using Dapper;
using Microsoft.EntityFrameworkCore;
using Microsoft.Extensions.Options;
using ServicioSocial.Business.Generic;
using ServicioSocial.Business.Helpers;
using ServicioSocial.Business.Models;
using ServicioSocial.Business.Repositories.Interfaces;

namespace ServicioSocial.Business.Repositories
{
    public class UsuarioRepository : GenericRepository<Usuario>, IUsuarioRepository
    {
        private readonly AppSettings _settings;
        private static string _tableName = "Usuarios";
        public UsuarioRepository(IOptions<AppSettings> settings) : base(settings, _tableName)
        {
            _settings = settings.Value;
        }

        public async Task<Usuario> GetByUserName(string username)
        {
            string query = $"SELECT * FROM {_tableName} WHERE Username = '{username}'";
            using (var connection = new SqlConnection(_settings.Connection))
            {
                var row = await connection.QueryFirstOrDefaultAsync<Usuario>(query);
                return row;
            }
        }
    }
}
