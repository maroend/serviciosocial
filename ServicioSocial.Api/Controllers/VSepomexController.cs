using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using ServicioSocial.Business.Models;
using ServicioSocial.Business.Repositories.Interfaces;

namespace ServicioSocial.Api.Controllers
{
    [Route("api/[controller]")]
    public class VSepomexController :Controller
    {
        private readonly IVSepomexRepository _repository;

        public VSepomexController(IVSepomexRepository repository) 
        {
            _repository = repository;
        }

        [HttpPost("[action]")]
        public async Task<ActionResult<IEnumerable<VSepomex>>> GetFromCp(string cp)
        {
            try
            {
                return Ok( await _repository.GetColoniasFromCP(cp));
            }
            catch (Exception ex)
            {

                return StatusCode(500, ex.Message);
            }
        }



    }
}