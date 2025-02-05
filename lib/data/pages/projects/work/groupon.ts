import { Section } from '@/lib/utils/typeDefinitions/interfaces'
import { PROJECTS_WORK } from '@/localization/english-texts-data'

export const sections: Section[] = [
  {
    id: 0,
    title: PROJECTS_WORK.groupon.sections.responsibility.title,
    titleHighlight: '',
    items: [
      {
        id: '0-0',
        text: PROJECTS_WORK.groupon.sections.responsibility.items[0],
      },
      {
        id: '0-1',
        text: PROJECTS_WORK.groupon.sections.responsibility.items[1],
      },
    ],
  },
  {
    id: 1,
    title: PROJECTS_WORK.groupon.sections.role.title,
    titleHighlight: '',
    items: [
      {
        id: '1-0',
        text: PROJECTS_WORK.groupon.sections.role.items[0],
      },
      {
        id: '1-1',
        text: PROJECTS_WORK.groupon.sections.role.items[1],
      },
    ],
  },
  {
    id: 2,
    title: PROJECTS_WORK.groupon.sections.automation.title,
    titleHighlight: PROJECTS_WORK.groupon.sections.automation.titleHighlight,
    items: [
      {
        id: '2-0',
        text: PROJECTS_WORK.groupon.sections.automation.items[0],
      },
      {
        id: '2-1',
        text: PROJECTS_WORK.groupon.sections.automation.items[1],
      },
      {
        id: '2-2',
        text: PROJECTS_WORK.groupon.sections.automation.items[2],
      },
      {
        id: '2-3',
        text: PROJECTS_WORK.groupon.sections.automation.items[3],
      },
      {
        id: '2-4',
        text: PROJECTS_WORK.groupon.sections.automation.items[4],
      },
    ],
  },
  {
    id: 3,
    title: PROJECTS_WORK.groupon.sections.coordination.title,
    titleHighlight: PROJECTS_WORK.groupon.sections.coordination.titleHighlight,
    items: [
      {
        id: '3-0',
        text: PROJECTS_WORK.groupon.sections.coordination.items[0],
      },
      {
        id: '3-1',
        text: PROJECTS_WORK.groupon.sections.coordination.items[1],
      },
      {
        id: '3-2',
        text: PROJECTS_WORK.groupon.sections.coordination.items[2],
      },
      {
        id: '3-3',
        text: PROJECTS_WORK.groupon.sections.coordination.items[3],
      },
      {
        id: '3-4',
        text: PROJECTS_WORK.groupon.sections.coordination.items[4],
      },
      {
        id: '3-5',
        text: PROJECTS_WORK.groupon.sections.coordination.items[5],
      },
    ],
  },
]
