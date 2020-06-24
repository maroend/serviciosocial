using Microsoft.Extensions.Options;
using ServicioSocial.Business.Generic;
using ServicioSocial.Business.Helpers;
using ServicioSocial.Business.Models;
using ServicioSocial.Business.Repositories.Interfaces;
using System;
using System.Collections.Generic;
using System.Text;
using System.Threading.Tasks;

namespace ServicioSocial.Business.Repositories
{
    public class OrganizacionesRepository:GenericRepository<Organizaciones>, IOrganizacionesRepository
    {
        private readonly AppSettings _settings;
        private readonly IOrganizacionesAreasAccionRepository _OrganizacionesAreasAccionRepository;
        private readonly IOrganizacionesRubrosRepository _OrganizacionesRubrosRepository;
        private readonly IIntegrantesPatronatoRepository _integrantesPatronatoRepository;
        private readonly IContactosRepository _contactosRepository;
        private static string _tableName = "Organizaciones";
        public OrganizacionesRepository(IOptions<AppSettings> settings, 
            IOrganizacionesAreasAccionRepository organizacionesAreasAccion,
            IOrganizacionesRubrosRepository organizacionesRubros,
            IIntegrantesPatronatoRepository integrantesPatronato,
            IContactosRepository contactos) : base(settings, _tableName)
        {
            _settings = settings.Value;
            _OrganizacionesAreasAccionRepository = organizacionesAreasAccion;
            _integrantesPatronatoRepository = integrantesPatronato;
            _OrganizacionesRubrosRepository = organizacionesRubros;
            _contactosRepository = contactos;
        }

        public override async Task<bool> Create(Organizaciones entity)
        {
            var result = await base.CreateId(entity);

            if (result>0)
            {
                entity.Id= result;
                foreach (OrganizacionesAreasAccion areasAccion in entity.ListaAreasAccion)
                {
                    areasAccion.IdOrganizacion = entity.Id;
                    var result2 = await _OrganizacionesAreasAccionRepository.Create(areasAccion);
                }
                foreach (IntegrantesPatronato integrantesPatronato in entity.ListaIntegrantes)
                {
                    integrantesPatronato.IdOrganizacion = entity.Id;
                    var result2 = await _integrantesPatronatoRepository.Create(integrantesPatronato);
                }
                foreach (OrganizacionesRubros organizacionesRubros in entity.ListaRubros)
                {
                    organizacionesRubros.IdOrganizacion = entity.Id;
                    var result2 = await _OrganizacionesRubrosRepository.Create(organizacionesRubros);
                }

                foreach (Contactos contacto in entity.ListaContactos)
                {
                    contacto.IdOrganizacion = entity.Id;
                    var result2 = await _contactosRepository.Create(contacto);
                }
            }

            return result>0;
        }

        public override async Task<Organizaciones> GetById(long id)
        {
            Organizaciones organizacion=await base.GetById(id);

            if (organizacion != null)
            {
                organizacion.ListaAreasAccion = (List<OrganizacionesAreasAccion>)await _OrganizacionesAreasAccionRepository.GetListByIdOrganizacion(id);
                organizacion.ListaIntegrantes = (List<IntegrantesPatronato>)await _integrantesPatronatoRepository.GetLisByIdOrganizacion(id);
                organizacion.ListaRubros = (List<OrganizacionesRubros>)await _OrganizacionesRubrosRepository.GetListByIdOrganizacion(id);
                organizacion.ListaContactos = (List<Contactos>)await _contactosRepository.GetListByIdOrganizacion(id);
            }

            return organizacion;
        }

    }
}
