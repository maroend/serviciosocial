using ServicioSocial.Business.Generic;
using ServicioSocial.Business.Models;
using System;
using System.Collections.Generic;
using System.Text;
using System.Threading.Tasks;

namespace ServicioSocial.Business.Repositories.Interfaces
{
    public interface IOrganizacionesRubrosRepository:IGenericRepository<OrganizacionesRubros>
    {
        Task<IEnumerable<OrganizacionesRubros>> GetListByIdOrganizacion(long idOrganizacion);
    }
}
