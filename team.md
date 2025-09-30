---
layout: page
---


<script setup>
import {
  VPTeamPage,
  VPTeamPageTitle,
  VPTeamMembers
} from 'vitepress/theme'
// 团队成员
const members = [
  {
    avatar: 'https://www.github.com/bretren.png',
    name: 'Bret',
    title: 'Owner and Main Developers',
    links: [
      { icon: 'github', link: 'https://github.com/bretren' }
    ]
  },
  {
    avatar: 'https://www.github.com/xxdmkbmark.png',
    name: 'Mark',
    title: 'Administrator / Front-end Developer',
    links: [
      { icon: 'github', link: 'https://github.com/xxdmkbmark' }
    ]
  }
]
</script>

<VPTeamPage>
  <VPTeamPageTitle>
    <template #title>
      Our Team
    </template>
    <template #lead>
      Pdnode main personnel
    </template>
  </VPTeamPageTitle>


  <VPTeamMembers :members="members" />
</VPTeamPage>
