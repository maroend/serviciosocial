using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Mvc;
using ServicioSocial.Business.Models;
using ServicioSocial.Business.Repositories.Interfaces;

namespace ServicioSocial.Api.Controllers
{
    public class OrganizacionesController : GenericController<Organizaciones>
    {
        private readonly IOrganizacionesRepository _repository;
        
        private readonly IOrganizacionesRubrosRepository _repositoryOrganizacionesRubros;

        public OrganizacionesController(IOrganizacionesRepository repository) : base(repository)
        {
            _repository = repository;
        }
        
        [HttpPost("[action]")]
        public async Task<ActionResult<Organizaciones>> CreateWithDetails([FromBody]Organizaciones organizacion)
        {
            try
            {
                var result = await _repository.Create(organizacion);
                return Ok(result);
            }
            catch (Exception ex)
            {
                return BadRequest(ex.Message);
            }
        }
        
        [HttpPost("[action]")]
        public async Task<ActionResult<Organizaciones>> GetWithDetails([FromBody]int idOrganizacion)
        {
            try
            {
                Organizaciones organizacion= await _repository.GetById(idOrganizacion);
                return Ok(organizacion);
            }
            catch (Exception ex)
            {
                return BadRequest(ex.Message);
            }
        }

    }
}