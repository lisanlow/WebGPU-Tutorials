// export const Shaders = (color:string) => {
//     const vertex = `
//     @stage(vertex)
//     fn main(@builtin(vertex_index) VertexIndex : u32)
//          -> @builtin(position) vec4<f32> {
//       var pos = array<vec2<f32>, 3>(
//           vec2<f32>(0.0, 0.5),
//           vec2<f32>(-0.5, -0.5),
//           vec2<f32>(0.5, -0.5));
    
//       return vec4<f32>(pos[VertexIndex], 0.0, 1.0);
//     }
//     `;

//     const fragment = `
//     @stage(fragment)
//     fn main() -> @location(0) vec4<f32> {
//       return vec4<f32>${color};
//     } 
//     `;
//     return {vertex, fragment};
// }

export const Shaders = () => {
  const vertex = `
      struct Output {
          @builtin(position) Position : vec4<f32>,
          @location(0) vColor : vec4<f32>
      };

      @stage(vertex)
      fn main(@builtin(vertex_index) VertexIndex : u32) -> Output {
          var pos = array<vec2<f32>, 3>(
              vec2<f32>(0.0, 0.5),
              vec2<f32>(-0.5, -0.5),
              vec2<f32>(0.5, -0.5)
          );
  
          var color = array<vec3<f32>, 3>(
              vec3<f32>(1.0, 0.0, 0.0),
              vec3<f32>(0.0, 1.0, 0.0),
              vec3<f32>(0.0, 0.0, 1.0)
          );

          var output: Output;
          output.Position = vec4<f32>(pos[VertexIndex], 0.0, 1.0);
          output.vColor = vec4<f32>(color[VertexIndex], 1.0);
          return output;
      }
  `;

  const fragment = `
      @stage(fragment)
      fn main(@location(0) vColor: vec4<f32>) -> @location(0) vec4<f32> {
          return vColor;
      }
  `;
  return {vertex, fragment};
}


// export const Shaders = () => {
//   const vertex = `
//       struct Output {
//           [[builtin(position)]] Position : vec4<f32>;
//           [[location(0)]] vColor : vec4<f32>;
//       };

//       [[stage(vertex)]]
//       fn main([[builtin(vertex_index)]] VertexIndex: u32) -> Output {
//           var pos = array<vec2<f32>, 3>(
//               vec2<f32>(0.0, 0.5),
//               vec2<f32>(-0.5, -0.5),
//               vec2<f32>(0.5, -0.5)
//           );
  
//           var color = array<vec3<f32>, 3>(
//               vec3<f32>(1.0, 0.0, 0.0),
//               vec3<f32>(0.0, 1.0, 0.0),
//               vec3<f32>(0.0, 0.0, 1.0)
//           );

//           var output: Output;
//           output.Position = vec4<f32>(pos[VertexIndex], 0.0, 1.0);
//           output.vColor = vec4<f32>(color[VertexIndex], 1.0);
//           return output;
//       }
//   `;

//   const fragment = `
//       [[stage(fragment)]]
//       fn main([[location(0)]] vColor: vec4<f32>) -> [[location(0)]] vec4<f32> {
//           return vColor;
//       }
//   `;
//   return {vertex, fragment};
// }

