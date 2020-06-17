using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Mvc;
using ServicioSocial.Business.Models;
using ServicioSocial.Business.Repositories.Interfaces;

// For more information on enabling MVC for empty projects, visit https://go.microsoft.com/fwlink/?LinkID=397860

namespace ServicioSocial.Api.Controllers
{
    //[Authorize]
    public class UsuariosController : GenericController<Usuario>
    {
        private readonly IUsuarioRepository _repository;

        public UsuariosController(IUsuarioRepository repository) : base(repository)
        {
            _repository = repository;
        }

        [HttpGet("Name")]
        public async Task<ActionResult<Usuario>> getByName(string name)
        {
            try
            {
                var result = await _repository.GetByUserName(name);
                return Ok(result);
            }
            catch(Exception ex)
            {
                return BadRequest(ex.Message);
            }
        }
    }
}
