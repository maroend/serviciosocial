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
        public async Task<ActionResult<ResponseModel>> getByName(string name)
        {
            ResponseModel respuesta = new ResponseModel();
            respuesta.Resultado = 0;
            respuesta.Mensaje = "Error al obtener usuario";
            try
            {
                respuesta.Datos = await _repository.GetByUserName(name);
                respuesta.Resultado = 1;
                respuesta.Mensaje = "Usuario obtenido";
            }
            catch(Exception ex)
            {
                respuesta.Mensaje= ex.Message;
            }
            return respuesta;
        }
        
        [HttpGet("[action]")]
        public async Task<ActionResult<ResponseModel>> login(string user, string contraseña)
        {
            ResponseModel respuesta = new ResponseModel();
            respuesta.Resultado = 0;
            respuesta.Mensaje = "Error al obtener usuario";
            try
            {
                if (string.IsNullOrEmpty(user))
                {
                    respuesta.Mensaje = "Usuario no debe de ser vacío";
                    return respuesta;
                }
                else if (string.IsNullOrEmpty(contraseña)) {
                    respuesta.Mensaje = "Contraseña no debe de ser vacío";
                    return respuesta;
                }

                Usuario usuario = await _repository.GetByUserName(user);

                if (usuario != null && !string.IsNullOrEmpty(usuario.Nombre) && !string.IsNullOrEmpty(usuario.Contraseña))
                {
                    if (usuario.Contraseña.Equals(contraseña))
                    {

                        usuario.Contraseña = "";
                        respuesta.Resultado = 1;
                        respuesta.Mensaje = "Usuario logueado";
                        respuesta.Datos = usuario;
                        return respuesta;

                    }
                    else
                    {

                        respuesta.Mensaje = "Contraseña incorrecta";
                        return respuesta;

                    }
                }
                else {

                    respuesta.Mensaje = "Usuario no encontrado";
                    return respuesta;
                }

            }
            catch(Exception ex)
            {
                return BadRequest(ex.Message);
            }
        }


    }
}
