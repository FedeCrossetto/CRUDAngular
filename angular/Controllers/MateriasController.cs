using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using angular.Models;

namespace angular.Controllers
{
    [Produces("application/json")]
    [Route("api/Materias")]
    public class MateriasController : Controller
    {
        private readonly ApplicationDbContext _context;

        public MateriasController(ApplicationDbContext context)
        {
            _context = context;
        }

        // GET: api/materias
        [HttpGet]
        public IEnumerable<Materia> GetMaterias()
        {

            return _context.Materias;
        }

        // GET: api/materias-editar/5
        [HttpGet("{id}")]
        public async Task<IActionResult> GetMateria([FromRoute] int id)
        {
            if (!ModelState.IsValid)
            {
                return BadRequest(ModelState);
            }

            Materia materia;


            materia = await _context.Materias.SingleOrDefaultAsync(m => m.Id == id);


            if (materia == null)
            {
                return NotFound();
            }

            return Ok(materia);
        }


        // PUT: api/materias-agregar/5
        [HttpPut("{id}")]
        public async Task<IActionResult> PutMateria([FromRoute] int id, [FromBody] Materia materia)
        {
            if (!ModelState.IsValid)
            {
                return BadRequest(ModelState);
            }

            if (id != materia.Id)
            {
                return BadRequest();
            }

            _context.Entry(materia).State = EntityState.Modified;

            try
            {
                await _context.SaveChangesAsync();
            }
            catch (DbUpdateConcurrencyException)
            {
                if (!MateriaExists(id))
                {
                    return NotFound();
                }
                else
                {
                    throw;
                }
            }

            return NoContent();
        }

        //POST: api/materias-agregar
        [HttpPost]
        public async Task<IActionResult> PostMateria([FromBody] Materia materia)
        {
            if (!ModelState.IsValid)
            {
                return BadRequest(ModelState);
            }

            _context.Materias.Add(materia);
            await _context.SaveChangesAsync();

            return CreatedAtAction("GetMateria", new { id = materia.Id }, materia);
        }

        //// DELETE: api/materias-editar/5
        [HttpDelete("{id}")]
        public async Task<IActionResult> DeleteMateria([FromRoute] int id)
        {
            if (!ModelState.IsValid)
            {
                return BadRequest(ModelState);
            }

            var materia = await _context.Materias.SingleOrDefaultAsync(m => m.Id == id);
            if (materia == null)
            {
                return NotFound();
            }

            _context.Materias.Remove(materia);
            await _context.SaveChangesAsync();

            return Ok(materia);
        }

        private bool MateriaExists(int id)
        {
            return _context.Alumnos.Any(e => e.Id == id);
        }
    }
}