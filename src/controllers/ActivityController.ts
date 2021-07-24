import { NextFunction, Request, Response } from 'express';

import {ResponseApi, ResponseServerErrorApi} from '../utils/ResponseApi';
import UserAttendances from '../models/UserAttendances';

const getActivities = async (req: Request, res: Response, next: NextFunction) => {
    try {
        const { userId } = req.query;

        /** validate request */
        if(!userId) {
            return ResponseApi({res, code:'error', codeType:'0', message:'UserId is required'});
        }

        const userAttendances = await UserAttendances.find({ userId }).sort({ '_id': 'desc' }).exec();

        return ResponseApi({
            res, code:'success',
            codeType:'1',
            message:'get activities successfully',
            data: userAttendances
        });
    } catch (error) {
        console.log('error', error)
        return ResponseServerErrorApi({res, data: {error}});
    }
};

const submitActivity = async (req: Request, res: Response, next: NextFunction) => {
    try {
        const {
            userId,
            lookupActivitiesId,
            lookupActivitiesName,
            pathPhoto,
            latitude,
            longitude
        } = req.body;

        /** validate request */
        if(!userId) {
            return ResponseApi({res, code:'error', codeType:'0', message:'Email is required'});
        }
        if(!lookupActivitiesId) {
            return ResponseApi({res, code:'error', codeType:'0', message:'Lookup Activities ID is required'});
        }
        if(!lookupActivitiesName) {
            return ResponseApi({res, code:'error', codeType:'0', message:'Lookup Activities Name is required'});
        }
        if(!pathPhoto) {
            return ResponseApi({res, code:'error', codeType:'0', message:'Path foto is required'});
        }
        if(!latitude) {
            return ResponseApi({res, code:'error', codeType:'0', message:'Latitude is required'});
        }
        if(!longitude) {
            return ResponseApi({res, code:'error', codeType:'0', message:'Longitude is required'});
        }

        const newActivity = new UserAttendances({
            userId,
            lookupActivitiesId,
            lookupActivitiesName,
            pathPhoto,
            latitude,
            longitude,
            status: 1,
            createdBy: userId,
            createdAt: new Date
        });
        newActivity.save();

        return ResponseApi({
            res, code:'success',
            codeType:'1',
            message:'Submit activity successfully',
            data: null
        });
    } catch (error) {
        console.log('error', error)
        return ResponseServerErrorApi({res, data: {error}});
    }
};


export default {
    getActivities,
    submitActivity
};