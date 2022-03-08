<template>
  <div
    class="tw-w-3/4 sm:tw-w-300px tw-h-screen tw-overflow-y-auto tw-bg-secondary-white shadow-right"
  >
    <div
      :class="[
        'tw-flex tw-justify-center tw-items-center',
        'tw-pt-16px tw-mb-16px',
        'tw-font-semibold tw-text-20px sm:tw-text-24px',
      ]"
    >
      <img :src="logo" class="tw-w-36px tw-h-36px" />
      <label class="tw-ml-16px tw-text-primary-black">EDEN</label
      ><label class="tw-text-primary-brown">VERDEN</label>
    </div>

    <div v-for="(menu, indexOfMenu) in menus" :key="indexOfMenu">
      <div class="tw-text-12px sm:tw-text-16px">
        <div
          :class="[
            ' tw-flex tw-items-center tw-justify-between tw-w-full tw-h-40px sm:tw-h-46px tw-cursor-pointer',
            {
              'tw-bg-fff-white tw-border': currentMenu.includes(menu.path),
            },
          ]"
        >
          <div class="tw-flex tw-items-center tw-cursor-pointer" @click="currentMenu = menu.path">
            <div
              v-if="currentMenu.includes(menu.path)"
              class="tw-w-6px tw-h-40px sm:tw-h-46px tw-bg-primary-brown"
            ></div>

            <label
              :class="[ 'tw-cursor-pointer',
                {
                  'tw-ml-18px tw-text-primary-brown tw-font-semibold':
                    currentMenu.includes(menu.path),
                  'tw-ml-24px tw-text-primary-black': !currentMenu.includes(
                    menu.path
                  ),
                },
              ]"
              >{{ menu.title }}</label
            >
          </div>

          <div
            v-if="menu.subMenu.length"
            :class="[
              'tw-mr-24px bi tw-cursor-pointer',
              {
                'bi-chevron-down': currentMenu.includes(menu.path),
                'bi-chevron-right': !currentMenu.includes(menu.path),
              },
              {
                'tw-text-primary-brown': currentMenu === menu.path,
                'tw-text-primary-black': currentMenu !== menu.path,
              },
            ]"
          ></div>
        </div>

        <div
          v-if="currentMenu.includes(menu.path)"
          :class="{
            'tw-bg-fff-white shadow-top': currentMenu.includes(menu.path),
            'tw-pb-12px': menu.subMenu.length,
          }"
        >
          <div
            v-for="(subMenu, indexOfSubMenu) in menu.subMenu"
            :key="indexOfSubMenu"
          >
            <div
              class="tw-pt-12px tw-flex tw-justify-between"
              @click="currentMenu = subMenu.path"
            >
              <label
                :class="[
                  'tw-ml-36px tw-cursor-pointer',
                  {
                    'tw-text-secondary-brown': currentMenu === subMenu.path,
                  },
                  {
                    'tw-text-primaly-black tw-font-semibold':
                      currentMenu.includes(subMenu.path),
                    'tw-text-primaly-black': !currentMenu.includes(
                      subMenu.path
                    ),
                  },
                ]"
              >
                {{ subMenu.title }}</label
              >
              <div
                v-if="subMenu.childSubMenu.length"
                :class="[
                  'tw-mr-24px bi tw-cursor-pointer',
                  {
                    'bi-chevron-down tw-text-primary-brown':
                      currentMenu.includes(subMenu.path),
                    'bi-chevron-right tw-text-primary-black':
                      !currentMenu.includes(subMenu.path),
                  },
                ]"
                @click="currentMenu = subMenu.path"
              ></div>
            </div>

            <div v-if="subMenu.childSubMenu.length" class="tw-flex">
              <div
                class="tw-ml-36px tw-h-auto tw-border tw-bg-secondary-grey"
              ></div>

              <div v-if="currentMenu.includes(subMenu.path)" class="tw-flex-col tw-cursor-pointer">
                <div
                  v-for="(
                    childSubMenu, indexOfChildSubMenu
                  ) in subMenu.childSubMenu"
                  :key="indexOfChildSubMenu"
                  @click="currentMenu = childSubMenu.path"
                >
                  <label
                    :class="[
                      'tw-ml-16px tw-cursor-pointer',
                      {
                        'tw-text-secondary-brown tw-font-semibold':
                          currentMenu === childSubMenu.path,
                      },
                      {
                        'tw-text-secondary-black':
                          currentMenu !== childSubMenu.path,
                      },
                    ]"
                    >{{ childSubMenu.title }}</label
                  >
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "BaseSidebar",
  props: {},
  data() {
    return {
      logo: require("../../../assets/svgs/eden-logo-v01.svg"),
      currentMenu: "/holy-weapons/asset-sale-phases/phase-1",
      menus: [
        {
          title: "Introduction",
          path: "/introduction",
          subMenu: [
            {
              title: "Blockchain Machanic",
              path: "/introduction/blockchain-machanic",
              childSubMenu: [],
            },
            {
              title: "Core Game Machanic",
              path: "/introduction/core-game-machanic",
              childSubMenu: [],
            },
          ],
        },
        {
          title: "Purpose of This Whitepaper",
          path: "/purpose-of-this-whitepaper",
          subMenu: [],
        },
        {
          title: "The Origin of Eden",
          path: "/the-origin-of-eden",
          subMenu: [
            {
              title: "..",
              path: "/the-origin-of-eden/..",
              childSubMenu: [],
            },
          ],
        },
        {
          title: "Holy Weapons",
          path: "/holy-weapons",
          subMenu: [
            {
              title: "Asset sale phases",
              path: "/holy-weapons/asset-sale-phases",
              childSubMenu: [
                {
                  title: "Phase I",
                  path: "/holy-weapons/asset-sale-phases/phase-1",
                },
                {
                  title: "Phase II",
                  path: "/holy-weapons/asset-sale-phases/phase-2",
                },
                {
                  title: "Phase III",
                  path: "/holy-weapons/asset-sale-phases/phase-3",
                },
                {
                  title: "Ongoing sales",
                  path: "/holy-weapons/asset-sale-phases/ongoing-sales",
                },
              ],
            },
            {
              title: "Asset use cases",
              path: "/holy-weapons/asset-use-cases",
              childSubMenu: [
                {
                  title: "In-game trading",
                  path: "/holy-weapons/asset-use-cases/phase-1",
                },
                {
                  title: "Node staking",
                  path: "/holy-weapons/asset-use-cases/node-staking",
                },
              ],
            },
          ],
        },
        {
          title: "Gameplay Pillars",
          path: "/gameplay-pillars",
          subMenu: [
            {
              title: "...",
              path: "/gameplay-pillars/...",
              childSubMenu: [],
            },
          ],
        },
        {
          title: "Eden Economics",
          path: "/eden-economics",
          subMenu: [
            {
              title: "In-game currency",
              path: "/eden-economics/in-game-currency",
              childSubMenu: [],
            },
            {
              title: "Governence token",
              path: "/eden-economics/governence-token",
              childSubMenu: [],
            },
            {
              title: "Tokenomics and value matrix",
              path: "/eden-economics/tokenomics-and-value-matrix",
              childSubMenu: [],
            },
          ],
        },
        {
          title: "Market Research",
          path: "/market-research",
          subMenu: [
            {
              title: "Gaming market",
              path: "/market-research/gaming-market",
              childSubMenu: [],
            },
            {
              title: "NFT market",
              path: "/market-research/nft-market",
              childSubMenu: [],
            },
            {
              title: "Competitive analysis",
              path: "/market-research/competitive-analysis",
              childSubMenu: [],
            },
          ],
        },
        {
          title: "Technologies",
          path: "/technologies",
          subMenu: [
            {
              title: "Blockchain technologies",
              path: "/technologies/blockchain-technologies",
              childSubMenu: [],
            },
            {
              title: "NFT market",
              path: "/technologies/game-technologies",
              childSubMenu: [],
            },
          ],
        },
        {
          title: "Vision",
          path: "/vision",
          subMenu: [],
        },
        {
          title: "Conclusion",
          path: "/conclusion",
          subMenu: [],
        },
        {
          title: "Partner",
          path: "/partner",
          subMenu: [],
        },
        {
          title: "Eden Community",
          path: "/eden communityr",
          subMenu: [],
        },
      ],
    }
  },
}
</script>

<style lang="scss" scoped></style>
