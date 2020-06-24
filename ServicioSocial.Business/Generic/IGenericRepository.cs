using System;
using System.Collections.Generic;
using System.Threading.Tasks;

namespace ServicioSocial.Business.Generic
{
    public interface IGenericRepository<U> where U : class
    {
        Task<IEnumerable<U>> GetAll();
        Task<U> GetById(long id);
        Task<long> CreateId(U entity);
        Task<bool> Create(U entity);
        Task<bool> Update(long id, U entity);
        Task<bool> Delete(long id);
    }
}
