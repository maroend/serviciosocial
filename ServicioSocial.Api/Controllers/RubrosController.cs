using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Mvc;
using ServicioSocial.Business.Models;
using ServicioSocial.Business.Repositories;
using ServicioSocial.Business.Repositories.Interfaces;

namespace ServicioSocial.Api.Controllers
{
    public class RubrosController : GenericController<Rubros>
    {
        private readonly IRubrosRepository _repository;
        public RubrosController(IRubrosRepository repository) : base(repository) {
            _repository = repository;
        }
    }
}