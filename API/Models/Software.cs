using System.ComponentModel.DataAnnotations;

namespace API.Models
{
    public class Software
    {
        [Required]
        public string Name { get; set; }

        [Required]
        public string Version { get; set; }
    }
}