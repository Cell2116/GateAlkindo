import { useState, useEffect, useCallback } from "react";
import { TruckHistoryRecord } from "@/types/truck.types";
import { useTrucks } from "@/store/truckStore";
const transformTruckRecordToHistory = (truck: any): TruckHistoryRecord => {
    return {
        id: parseInt(truck.id) || 0,
        platenumber: truck.platenumber || '',
        noticket: truck.noticket || '',
        department: truck.department || '',
        nikdriver: truck.nikdriver || '',
        tlpdriver: truck.tlpdriver || '',
        nosj: truck.nosj || '',
        tglsj: truck.tglsj || '',
        driver: truck.driver || '',
        supplier: truck.supplier || '',
        eta: truck.eta || '',
        status: truck.status || '',
        type: truck.type || '',
        goods: truck.goods || '',
        descin: truck.descin || '',
        descout: truck.descout || '',
        statustruck: truck.statustruck || '',
        armada: truck.armada || '',
        kelengkapan: truck.kelengkapan || '',
        jenismobil: truck.jenismobil || '',
        date: truck.date || '',
        arrivaltime: truck.arrivaltime || '',
        exittime: truck.exittime || '',
        waitingfortimbang: truck.waitingfortimbang || '',
        starttimbang: truck.starttimbang || '',
        finishtimbang: truck.finishtimbang || '',
        totalprocesstimbang: truck.totalprocesstimbang || '',
        runtohpc: truck.runtohpc || '',
        waitingforarrivalhpc: truck.waitingforarrivalhpc || '',
        entryhpc: truck.entryhpc || '',
        totalwaitingarrival: truck.totalwaitingarrival || '',
        startloadingtime: truck.startloadingtime || '',
        finishloadingtime: truck.finishloadingtime || '',
        totalprocessloadingtime: truck.totalprocessloadingtime || '',
        actualwaitloadingtime: truck.actualwaitloadingtime || '',
        driver_photo: truck.driver_photo || '',
        stnk_photo: truck.stnk_photo || '',
        sim_photo: truck.sim_photo || '',
    };
};
export const useTruckHistory = () => {
    const {
        trucks,
        loading,
        error,
        fetchTrucks,
        refreshTrucks
    } = useTrucks();
    
    const records: TruckHistoryRecord[] = trucks.map(transformTruckRecordToHistory);
    
    useEffect(() => {
        if (trucks.length === 0 && !loading) {
            fetchTrucks();
        }
    }, []);
    const fetchTruckHistory = async () => {
        try {
            await fetchTrucks();
        } catch (err) {
            console.error("Failed to fetch truck history:", err);
        }
    };
    const fetchData = async () => {
        try {
            await refreshTrucks();
        } catch (err) {
            console.error("Failed to refresh truck history records:", err);
        }
    };
    return {
        records,
        fetchTruckHistory,
        fetchData,
        loading,
        error
    };
};