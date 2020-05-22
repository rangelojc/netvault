<template>
    <div class="app-content">
        <div class="pwmanager">
            <div class="pwhead">
                <span class="title">PASSWORD MANAGER</span>
                <div class="actions">
                    <input class="inp-search" type="text" placeholder="Search..." />
                </div>
            </div>
            <div class="pwcontent">
                <button class="btn-add-category">
                    <span @click="addCategory">+ ADD CATEGORY</span>
                </button>

                <div class="pwlist" :class="getListMode()">
                    <div
                        class="category"
                        v-for="(category,idx) in categoriesWithRecords"
                        :key="idx"
                    >
                        <div class="head">
                            <div class="head-title">
                                <i class="icon dropdown" @click="toggleCategoryMenu(category)"></i>
                                <span class="title">{{category.label.toUpperCase()}}</span>
                                <span class="cnt">{{`(${category.records.length})`}}</span>
                            </div>
                            <div class="head-actions">
                                <span>SORT BY</span>
                                <div class="select-wrapper">DEFAULT</div>
                                <div class="sort-line">
                                    <div class="wrapper">
                                        <button>
                                            <span class="icon sort-up"></span>
                                        </button>
                                        <button>
                                            <span class="icon sort-down"></span>
                                        </button>
                                    </div>
                                </div>
                            </div>
                            <CategoryMenu :category="category" />
                        </div>
                        <div class="record-items">
                            <button class="add-record" @click="addRecord(category.categoryId)">
                                <span>+</span>
                            </button>

                            <div
                                class="record"
                                :title="`View details from ${record.label}`"
                                v-for="(record, idx) in category.records"
                                :key="idx"
                                @click.self="viewRecord(record.recordId)"
                            >
                                <span class="x" @click="deleteRecord(record, category)">&times;</span>
                                <span class="label">{{record.label}}</span>
                            </div>
                            <div class="hidden" :key="`item${item}`" v-for="item in 3"></div>
                        </div>
                    </div>
                </div>
            </div>
        </div>

        <AddRecordForm :data="forms.addRecord" @toggleLoader="toggleLoader" />
        <AddCategoryForm :data="forms.addCategory" @toggleLoader="toggleLoader" />
        <DeleteRecordConfirm :data="forms.deleteRecord" @toggleLoader="toggleLoader" />

        <Loader :show="loader" />
    </div>
</template>

<script>
import Vue from "vue";
import { mapState } from "vuex";

import { pwApi } from "~/assets/scripts/apiService";

import CategoryMenu from "~/components/PWManager/CategoryMenu";
import AddRecordForm from "~/components/Forms/AddRecordForm";
import AddCategoryForm from "~/components/Forms/AddCategoryForm";
import DeleteRecordConfirm from "~/components/Forms/DeleteRecordConfirm";

import Loader from "~/components/Loader";

const DATA_MODEL = {
    listMode: "grid",
    forms: {
        addRecord: { show: false, category: {} },
        addCategory: { show: false },
        deleteRecord: { show: false, record: {}, category: {} }
    },
    loader: false
};

export default Vue.extend({
    components: {
        CategoryMenu,
        AddRecordForm,
        AddCategoryForm,
        DeleteRecordConfirm,
        Loader
    },
    layout: "main",
    computed: {
        ...mapState("pwmanager", {
            categoriesWithRecords: state => state.categoriesWithRecords
        })
    },
    data() {
        return DATA_MODEL;
    },
    methods: {
        toggleLoader(bool) {
            this.loader = bool;
        },
        toggleCategoryMenu(category) {
            category.showMenu = category.showMenu ? false : true;
        },

        //get
        getListMode() {
            return {
                grid: this.listMode === "grid",
                list: this.listMode === "list"
            };
        },

        //view
        viewRecord(recordId) {
            this.$router.push("pwmanager/view/" + recordId);
        },

        //crud
        addRecord(categoryId) {
            this.forms.addRecord.show = true;

            console.log(categoryId);

            if (categoryId) {
                this.forms.addRecord.category = this.$store.getters[
                    "pwmanager/categoryById"
                ](categoryId);
            } else {
                this.forms.addRecord.category = {
                    categoryId: null,
                    label: "Uncategorized"
                };
            }
        },
        addCategory() {
            this.forms.addCategory.show = true;
        },
        deleteRecord(record, category) {
            this.forms.deleteRecord.show = true;
            this.forms.deleteRecord.record = record;
            this.forms.deleteRecord.category = category;
        }
    },
    async fetch() {
        const userId = localStorage.NETVAULT_USERID;
        const getarry = [pwApi.getCategories(userId), pwApi.getRecords(userId)];

        Promise.all(getarry).then(responses => {
            this.$store.dispatch("pwmanager/fill", responses);
        });
    }
});
</script>

<style lang="scss" scoped>
@import "~/assets/scss/vars.scss";

.pwmanager {
    width: 100%;
    height: 100%;
    margin: 0;
    padding: 0;
    overflow: hidden;

    .pwhead {
        height: 50px;
        width: 100%;
        margin-top: 10px;
        padding: 0 20px;

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
    $offset: $header-height + 20px;
    height: calc(100% - #{$offset});
    overflow: hidden;
    padding: 0 20px;

    display: flex;
    flex-flow: column nowrap;
    justify-content: flex-start;
    align-items: center;

    .btn-add-category {
        width: 100%;
        height: 30px;
        margin-bottom: 20px;
        background: transparent;
        letter-spacing: 2px;
        margin: 20px 0 10px;

        &:hover {
            transition: 300ms;
            background: $dark41;
        }
    }
}

.pwcontent > .pwlist {
    height: 100%;
    width: 100%;
    overflow: auto;

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

            width: 100%;
        }

        .hidden {
            width: 0;
            height: 0px;
            margin: 0;
        }
    }
}

.pwcontent > .pwlist > .category {
    width: 100%;
    height: auto;
    margin-bottom: 20px;
}

.pwcontent > .pwlist > .category > .head {
    display: flex;
    flex-flow: row nowrap;
    justify-content: flex-start;
    align-items: center;
    height: 20px;
    position: relative;

    .head-title {
        height: 100%;
        min-width: 200px;

        display: flex;
        flex-flow: row nowrap;
        justify-content: flex-start;
        align-items: center;

        flex: 1 0 auto;

        .dropdown {
            margin-right: 10px;
            cursor: pointer;
        }

        .title,
        .cnt {
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

    .head-actions {
        display: flex;
        flex-flow: row nowrap;
        justify-content: flex-start;
        align-items: center;

        flex: 1 1 auto;
        width: 100%;
        height: 100%;

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

        > .sort-line {
            flex: 1 1 auto;
            width: 100%;
            height: 100%;
            margin-left: 10px;

            display: flex;
            align-items: center;
            transition: 200ms ease;
            cursor: pointer;

            &:hover {
                > .wrapper,
                > .wrapper > button,
                > .wrapper > button > span {
                    height: 100%;
                }
            }

            .wrapper {
                width: 100%;
                height: 0;
                display: flex;
                justify-content: space-between;
                transition: 300ms;

                button {
                    flex: 1 1 auto;
                    width: 50%;
                    margin: 0 2px;
                    height: 2px;
                    background: $dark52;
                    overflow: hidden;
                    font-size: 10px;
                    transition: 300ms;
                    padding: 0px;
                }
            }
        }
    }
}

.pwcontent > .pwlist > .category > .record-items {
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

        border-radius: 3px;
        background: $dark41;
        position: relative;

        .label {
            font-size: 18px;
            pointer-events: none;
        }

        .x {
            display: none;
            position: absolute;
            top: 0px;
            right: 3px;
            font-size: 20px;
            text-align: center;
            width: 20px;

            transition: 200ms;

            &:hover {
                font-weight: bold;
            }
        }

        &:hover {
            transition: 200ms;
            background: lighten($dark41, 10);

            .x {
                display: inline-block;
            }
        }
    }
}
</style>