import codeImage from '../images/code.jpg'
import softwareImage from '../images/software.jpg'

const allSkills = [
  {
    category: 'Programming Languages',
    image: codeImage,
    skills:
        [
          ['Python', true],
          ['C++', true],
          ['JavaScript', false],
          ['React', false],
          ['Java', false],
          ['SQL', false],
          ['MATLAB', false]
        ]
  },
  {
    category: 'Softwares',
    image: softwareImage,
    skills:
        [
          ['Adobe Suite', true],
          ['git', true],
          ['Linux', true],
          ['VSCode', true],
          ['SoldidWorks', true],
          ['Cura', false],
          ['Mesh Mixer', false]
        ]
  }
]

export default allSkills
