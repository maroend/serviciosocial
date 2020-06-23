using ServicioSocial.Business.Generic;
using ServicioSocial.Business.Models;
using System;
using System.Collections.Generic;
using System.Text;
using System.Threading.Tasks;

namespace ServicioSocial.Business.Repositories.Interfaces
{
    public interface IAreasAccionRepository : IGenericRepository<AreasAccion>
    {
        Task<IEnumerable<AreasAccion>> GetListByIdOrganizacion(int idOrganizacion);
    }
}
