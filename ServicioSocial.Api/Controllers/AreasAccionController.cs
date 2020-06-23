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
    public class AreasAccionController : GenericController<AreasAccion>
    {
        private readonly IAreasAccionRepository _repository;

        public AreasAccionController(IAreasAccionRepository repository) : base(repository)
        {
            _repository = repository;
        }

    }
}