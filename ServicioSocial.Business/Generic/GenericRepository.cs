using System;
using System.Collections.Generic;
using System.Threading.Tasks;
using Microsoft.EntityFrameworkCore;
using ServicioSocial.Business.Helpers;
using Dapper;
using System.Data.SqlClient;
using System.Reflection;
using System.Text;
using System.Linq;
using System.ComponentModel;
using Microsoft.Extensions.Options;

namespace ServicioSocial.Business.Generic
{
    public class GenericRepository<U> : IGenericRepository<U> where U : class
    {
        private readonly AppSettings _settings;
        private readonly string _tableName;

        public GenericRepository(IOptions<AppSettings> settings, string tableName)
        {
            _settings = settings.Value;
            _tableName = tableName;
        }

        public virtual async Task<long> CreateId(U entity)
        {
            string query = GenerateInsertQuery();
            using (var connection = new SqlConnection(_settings.Connection))
            {
                var affectedRows = await connection.QueryFirstOrDefaultAsync<long>(query, entity);
                return  affectedRows;
            }
        }
        public virtual async Task<bool> Create(U entity)
        {
            string query = GenerateInsertQuery();
            using (var connection = new SqlConnection(_settings.Connection))
            {
                var affectedRows = await connection.ExecuteAsync(query, entity);
                return affectedRows > 0;
            }
        }

        public virtual async Task<bool> Delete(long id)
        {
            string query = $"UPDATE {_tableName} SET Activo = 0 WHERE Id = {id}";
            using (var connection = new SqlConnection(_settings.Connection))
            {
                var affectedRows = await connection.ExecuteAsync(query);
                return affectedRows > 0;
            }
        }

        public virtual async Task<IEnumerable<U>> GetAll()
        {
            string query = $"SELECT * FROM {_tableName} WHERE Activo = 1";
            using (var connection = new SqlConnection(_settings.Connection))
            {
                var rows = await connection.QueryAsync<U>(query);
                return rows;
            }
        }

        public virtual async Task<U> GetById(long id)
        {
            string query = $"SELECT * FROM {_tableName} WHERE Id = {id}";
            using (var connection = new SqlConnection(_settings.Connection))
            {
                var row = await connection.QueryFirstOrDefaultAsync<U>(query);
                return row;
            }
        }

        public virtual async Task<bool> Update(long id, U entity)
        {
            string query = GenerateUpdateQuery();
            using (var connection = new SqlConnection(_settings.Connection))
            {
                var affectedRows = await connection.ExecuteAsync(query, entity);
                return affectedRows > 0;
            }
        }

        private IEnumerable<PropertyInfo> GetProperties => typeof(U).GetProperties();

        private static List<string> GenerateListOfProperties(IEnumerable<PropertyInfo> listOfProperties)
        {
            return (from prop in listOfProperties
                    let attributes = prop.GetCustomAttributes(typeof(DescriptionAttribute), false)
                    where attributes.Length <= 0 || (attributes[0] as DescriptionAttribute)?.Description != "ignore"
                    select prop.Name).ToList();
        }
        private string GenerateUpdateQuery()
        {
            var updateQuery = new StringBuilder($"UPDATE {_tableName} SET ");
            var properties = GenerateListOfProperties(GetProperties);
            var exclude = new List<string>() { "Id", "FechaCreacion", "Activo" };

            properties.ForEach(property =>
            {
                if (!exclude.Contains(property))
                {
                    updateQuery.Append($"{property}=@{property},");
                }
            });

            updateQuery.Remove(updateQuery.Length - 1, 1); //remove last comma
            updateQuery.Append(" WHERE Id=@Id");

            return updateQuery.ToString();
        }

        private string GenerateInsertQuery()
        {
            var insertQuery = new StringBuilder($"INSERT INTO {_tableName} ");

            insertQuery.Append("(");

            var properties = GenerateListOfProperties(GetProperties);
            properties.ForEach(prop => {
                if (!prop.Equals("Id"))
                    insertQuery.Append($"[{prop}],");
            });

            insertQuery
                .Remove(insertQuery.Length - 1, 1)
                .Append(") VALUES (");

            properties.ForEach(prop => {
                if (!prop.Equals("Id"))
                    insertQuery.Append($"@{prop},");
            });

            insertQuery
                .Remove(insertQuery.Length - 1, 1)
                .Append(")");
            insertQuery.Append(";SELECT CAST(SCOPE_IDENTITY() as BIGINT)");

            return insertQuery.ToString();
        }

    }
}
