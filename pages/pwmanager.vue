<template>
    <div class="app-content">
        <div class="pwmanager">
            <div class="pwhead">
                <span class="title">PASSWORD MANAGER</span>
                <div class="actions">
                    <input class="search" type="text" placeholder="Search..." />
                </div>
            </div>
            <div class="pwcontent" :class="getListMode()">
                <button class="add-category">
                    <span>+ ADD CATEGORY</span>
                </button>

                <div class="category" v-for="category in categoriesWithRecords">
                    <div class="head">
                        <div class="head-title">
                            <span class="title">{{category.label.toUpperCase()}}</span>
                            <span class="cnt">{{`(${category.records.length})`}}</span>
                        </div>
                        <div class="head-actions">
                            <span>SORT BY</span>
                            <div class="select-wrapper">DEFAULT</div>
                            <div class="line"></div>
                        </div>
                    </div>
                    <div class="record-items">
                        <button class="add-record">
                            <span>+</span>
                        </button>

                        <div class="record" v-for="record, idx in category.records" :key="idx">
                            <span>{{record.label}}</span>
                        </div>
                        <div class="hidden" :key="`item${item}`" v-for="item in 3"></div>
                    </div>
                </div>

                <div class="category">
                    <div class="head">
                        <div class="head-title">
                            <span class="title">UNCATEGORIZED</span>
                            <span class="cnt">{{`(${uncategorizedRecords.length})`}}</span>
                        </div>
                        <div class="head-actions">
                            <span>SORT BY</span>
                            <div class="select-wrapper">DEFAULT</div>
                            <div class="line"></div>
                        </div>
                    </div>
                    <div class="record-items">
                        <button class="add-record">
                            <span>+</span>
                        </button>

                        <div
                            class="record"
                            v-for="record, idx in uncategorizedRecords"
                            :key="idx"
                        >{{record.label}}</div>
                        <div class="hidden" :key="`item${item}`" v-for="item in 3"></div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
import Vue from "vue";
import { mapState } from "vuex";

import { pwApi } from "../assets/scripts/apiService";

export default Vue.extend({
    layout: "main",
    computed: {
        ...mapState("pwmanager", {
            categoriesWithRecords: state => state.categoriesWithRecords,
            uncategorizedRecords: state => state.uncategorizedRecords
        })
    },
    data() {
        return {
            listMode: "grid"
        };
    },
    methods: {
        getListMode() {
            return {
                grid: this.listMode === "grid",
                list: this.listMode === "list"
            };
        }
    },
    mounted() {
        const userId = localStorage.NETVAULT_USERID;
        const getarry = [pwApi.getCategories(userId), pwApi.getRecords(userId)];

        Promise.all(getarry).then(responses => {
            this.$store.dispatch("pwmanager/update", responses);
        });
    }
});
</script>

<style lang="scss">
@import "~/assets/scss/vars.scss";

.pwmanager {
    width: 100%;
    height: 100%;

    .pwhead {
        height: 50px;
        width: 100%;
        padding: 0 20px;
        margin-top: 10px;

        display: flex;
        align-items: center;

        .actions {
            margin-left: auto;
        }

        .title {
            display: inline-block;
            font-weight: bold;
            font-size: 18px;
        }
    }
}

.pwcontent {
    height: calc(100% - 50px);

    margin-top: 20px;
    padding: 0 20px;
    overflow: auto;

    display: flex;
    flex-flow: column nowrap;
    justify-content: flex-start;
    align-items: center;

    &.grid {
        .category .record-items {
            display: flex;
            flex-flow: row wrap;
            justify-content: flex-start;
            align-items: flex-start;
            align-content: flex-start;
        }

        .add-record {
            height: 60px;
            width: 60px;
            margin: 10px;
        }

        .record {
            margin: 10px;
            height: 60px;
            width: 20%;

            background: $dark41;
            border-radius: 3px;
        }

        .hidden {
            width: 29%;
            height: 0px;
            margin: 10px;
        }
    }

    &.list {
        .category .record-items {
            display: flex;
            flex-flow: column nowrap;
            justify-content: flex-start;
            align-items: center;
        }

        .record {
            flex: 0 0 auto;
            margin: 10px;
            height: 60px;
            border-radius: 3px;
            width: 100%;

            background: $dark41;
        }

        .hidden {
            width: 0;
            height: 0px;
            margin: 0;
        }
    }

    .add-category {
        width: 100%;
        height: 30px;
        margin-bottom: 20px;
        background: transparent;
        letter-spacing: 2px;

        &:hover {
            transition: 300ms;
            background: $dark41;
        }
    }
}

.pwcontent .category {
    width: 100%;
    height: auto;
    margin-bottom: 20px;

    .head {
        display: flex;
        flex-flow: row nowrap;
        justify-content: flex-start;
        align-items: center;

        &-title {
            min-width: 140px;

            display: flex;
            flex-flow: row nowrap;
            justify-content: flex-start;
            align-items: center;

            flex: 1 0 auto;

            span {
                display: inline-block;
                letter-spacing: 2px;
                font-size: 18px;
                width: auto;
                height: auto;
                flex: 0 0 auto;
            }

            .cnt {
                margin: 0 20px 0 5px;
                font-size: 16px;
                color: $secondarytxt;
            }
        }

        &-actions {
            display: flex;
            flex-flow: row nowrap;
            justify-content: flex-start;
            align-items: center;

            flex: 1 1 auto;
            width: 100%;

            > span {
                color: $secondarytxt;
                white-space: nowrap;
            }

            > .select-wrapper {
                margin-left: 10px;
                color: $secondarytxt;

                background: $dark41;
                border-radius: 5px;
                font-size: 14px;
                text-align: center;
                padding: 2px 10px;

                cursor: pointer;
            }

            > .line {
                flex: 1 1 auto;
                width: 100%;
                height: 0px;
                border-bottom: 2px solid $dark31;
                margin-left: 10px;
            }
        }
    }

    .record-items {
        margin-top: 10px;
        width: 100%;
        height: auto;

        .add-record {
            font-size: 24px;
            font-weight: 300;
        }

        .record {
            display: flex;
            flex-flow: row wrap;
            justify-content: center;
            align-items: center;
            cursor: pointer;

            span {
                font-size: 18px;
            }

            &:hover {
                transition: 200ms;
                background: rgba($accent1, 0.5);
            }
        }
    }
}
</style>