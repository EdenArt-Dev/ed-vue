<template>
  <div class="tw-w-3/4 sm:tw-w-300px tw-h-screen tw-overflow-y-auto tw-bg-secondary-white shadow-right">
    <div
      class="tw-flex tw-justify-center tw-items-center tw-pt-16px tw-mb-16px tw-font-semibold tw-text-head-mobile sm:tw-text-head-web"
    >
      <img :src="logo" class="tw-w-36px tw-h-36px" />
      <label class="tw-ml-16px tw-text-primary-black">EDEN</label
      ><label class="tw-text-primary-brown">VERDEN</label>
    </div>

    <div v-for="(menu, indexOfMenu) in menus" :key="indexOfMenu">
      <div class="tw-font-body-mobile sm:font-body-web">
        <div
          class="tw-h-46px tw-border tw-flex tw-items-center tw-bg-fff-white"
        >
          <div class="tw-w-6px tw-h-46px tw-bg-primary-brown"></div>
          <label class="tw-text-primary-black tw-ml-24px">{{
            menu.title
          }}</label>
        </div>

        <div class="shadow-top">
          <div
            v-for="(subMenu, indexOfSubMenu) in menu.subMenu"
            :key="indexOfSubMenu"
          >
            <label class="tw-text-secondary-black tw-ml-36px">{{
              subMenu.title
            }}</label>

            <div class="tw-flex">
              <div
                v-if="subMenu.childSubMenu.length > 0"
                class="tw-ml-36px tw-h-auto tw-border tw-bg-secondary-grey"
              ></div>

              <div class="tw-flex-col">
                <div
                  v-for="(
                    childSubMenu, indexOfChildSubMenu
                  ) in subMenu.childSubMenu"
                  :key="indexOfChildSubMenu"
                >
                  <label class="tw-ml-16px">{{ childSubMenu.title }}</label>
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
  data() {
    return {
      logo: require("../../../assets/svgs/eden-logo-v01.svg"),
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
